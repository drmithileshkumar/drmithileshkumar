<script>
    // @ts-nocheck
    import { enhance } from "$app/forms";
    import Button from "$lib/vectorial/ui/Button.svelte";
    import Label from "$lib/vectorial/ui/Label.svelte";
    import Message from "$lib/vectorial/ui/Message.svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage } from "$lib/vectorial/stores";
    import { post } from "$lib/vectorial/utils/post";
    import { put } from "$lib/vectorial/utils/put";
    import { invalidate } from "$app/navigation";
    import { createEventDispatcher } from "svelte";
    import { INVOICE } from "$lib/vectorial/stores";
    let dispatch = createEventDispatcher();
    let offer = 100;
    let status = false;
    let DEBUG = false;
    let KEY_ID = "rzp_live_lMsk4ZYh8eG2YH";
    let order_id;
    import { onMount } from "svelte";
    export let data;
    let imageNode;
    // let {$page.data.user} = data;
    // $: ({$page.data.user} = data);
    const makePayment = async (subscriptionType, offer) => {
        try {
            //----------create orderid-----------
            const res = await fetch(`/vectorial/api/subscription`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ amount: offer, type: subscriptionType }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                alert("Failed to create order id");
                return;
            }
            const order = await res.json();
            DEBUG && console.log(order);
            order_id = order.id;
            let options = {
                key: KEY_ID, // Enter the Key ID generated from the Dashboard
                name: "Vectorial.app",
                description: "Payment",
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the previous step
                handler: async function (response) {
                    //save data to server
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                    await verifyandsave(response, subscriptionType, offer);
                },
                prefill: {},
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            // @ts-ignore
            let rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
                alert("Payment failed...please try again.");
            });
            rzp1.open();
        } catch (error) {
            DEBUG && console.log(error);
        }
    };
    const verifyandsave = async (res, subscriptionType, offer) => {
        try {
            let url = "/vectorial/api/subscription";
            let obj = {
                rzp_payment_id: res.razorpay_payment_id,
                rzp_order_id: res.razorpay_order_id,
                rzp_signature: res.razorpay_signature,
                orderId: order_id,
                amount: offer,
                type: subscriptionType,
            };
            const message = await put(url, obj);
            alert(message);
            $INVOICE = obj;
            if (message === "Success") {
                goto("/drawings");
            }
        } catch (error) {
            DEBUG && console.log(error);
            alert(error);
        }
    };
    onMount(async () => {
        // invalidate(`/vectorial/api/subscription`);
        // if (data.subscription.message === "Renew subscription.") {
        //     alert("Please renew Subscription");
        //     return;
        // }
        // if (data.subscription.message === "Valid") {
        //     status = true;
        //     goto("/drawings");
        // }
        // console.log(data.subscription)
    });
    const changeProfile = async () => {
        if (!$page.data.user) {
            return;
        }

        fileInput.click();
    };
    let fileInput;
    let files;
    let avatar;
    function getBase64(image) {
        // console.log(image)
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target.result;
            profile = e.target.result;
            profileImage.set(profile);
            uploadFunction(e.target.result, image.name);
        };
    }

    async function uploadFunction(imgBase64, name) {
        const data = {};
        const imgData = imgBase64.split(",");
        data["name"] = name;
        data["image"] = imgData[1];
        const res = await fetch(`/vectorial/api/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            alert("Upload failed.");
            return;
        }
        alert("Image uploaded");
    }
</script>

<svelte:head>
    <title>{$page.data.user.name}</title>
    <link
        rel="canonical"
        href="https://drmithileshkumar.com/vectorial/{$page.data.user.publicID}"
    />
</svelte:head>
<div class="actions">
    <a href="/drawings" class="mydrawing">My Drawings</a>
    <form class="formAction" use:enhance method="POST" action="?/logout">
        <button class="logout">Log out</button>
    </form>
</div>

<div class="user">
    <div class="profile">
        <input
            class="hidden"
            id="file-to-upload"
            type="file"
            accept=".png,.jpg"
            bind:files
            bind:this={fileInput}
            on:change={() => getBase64(files[0])}
        />
        <img
            bind:this={imageNode}
            src={$profileImage}
            alt="Image"
            on:click={changeProfile}
            width="100"
            height="100"
        />
    </div>
    <div class="name">
        {$page.data.user.name}
    </div>
    <div class="qr" />
</div>
<article class="container">
    {#if data.subscription.type === "Trial"}
        <Message>
            <p>
                Congratulations! You have <strong>one week</strong> of free subscription
                to try all features.
            </p>
        </Message>
    {/if}
    <h1>Current subscription</h1>
    {#if data.subscription.message === "Valid"}
        <h3>
            Your subscription type is <span class="type"
                >{data.subscription.type}</span
            >
            and expires on
            <span class="expire"
                >{data.subscription.expire.date}-{data.subscription.expire
                    .month + 1}-{data.subscription.expire.year}</span
            >.
        </h3>
        <Message>
            <p>
                If the subscription status is <span class="expire">expired</span
                >, try to refresh the page. If it does not change and you think
                there is a mistake, contact at support@drmithileshkumar.com/vectorial
            </p>
        </Message>
    {:else}
        <h3>Your subscription has <span class="expire">expired.</span>.</h3>
    {/if}

    <section>
        <h1>Upgrade subscription</h1>
        <div class="plans">
            <div class="monthly">
                <p class="title">Monthly</p>
                <p class="rate">
                    <span class="currency">&#8377;</span>
                    <span class="price">500</span>
                    <span style="font-size: 0.6em;">+ taxes</span>
                </p>
                <Button on:click={() => makePayment("Monthly", 500)}>
                    <Label>Buy</Label>
                </Button>
            </div>
            <div class="yearly">
                <p class="title">Yearly</p>
                <p class="rate">
                    <span class="currency">&#8377;</span>
                    <span class="price">5000</span>
                    <span style="font-size: 0.6em;">+ taxes</span>
                    <br />
                    <span>Save &#8377; 1000</span>
                </p>
                <Button on:click={() => makePayment("Yearly", 5000)}>
                    <Label>Buy</Label>
                </Button>
            </div>
        </div>
    </section>
</article>

<style>
    /* .articles {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
    .article {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        box-shadow: 1px 1px 3px #888;
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 0.5em;
    }
    .details {
        grid-area: details;
    }
    .versionstatus {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }
    .goldenrod, .green, .red {
        color: white;
        padding: 0.5em 0.7em;
        border-radius: 5px;
        font-weight: 300;
        font-size: 0.8em;
    }
    .goldenrod {
        background-color: goldenrod;
    }
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    } */
    .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5em;
        margin-top: 4em;
        margin-bottom: 2em;
    }
    .profile {
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #888;
        cursor: pointer;
    }
    .profile:hover {
        background-color: rgb(99, 99, 99);
    }
    .profile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .hidden {
        display: none;
    }
    .title {
        font-size: 2.5em;
        margin-bottom: 0;
        margin-top: 0;
        font-weight: 300;
    }

    .type {
        display: inline-block;
        background: rgba(0, 200, 0, 0.1);
        color: rgba(0, 200, 0, 1);
        padding: 0.2em 0.5em;
        border-radius: 0.5em;
    }
    .plans {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 1em;
    }
    .monthly {
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        background: rgba(200, 200, 0, 0.5);
        padding: 1em;
        border-radius: 1em;
        width: 170px;
        height: 190px;
        align-items: end;
    }
    .yearly {
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        background: rgba(0, 200, 0, 0.5);
        padding: 1em;
        border-radius: 1em;
        width: 170px;
        height: 190px;
        align-items: end;
    }
    .expire {
        display: inline-block;
        background: rgba(200, 0, 0, 0.1);
        color: rgba(200, 0, 0, 1);
        padding: 0.2em 0.5em;
        border-radius: 0.5em;
    }
    .mydrawing {
        text-decoration: none;
        background-color: rgb(0 0 255 / 30%);
        color: blue;
        padding: 0.6em 1em;
        border-radius: 5px;
        font-weight: 400;
        font-variant-caps: all-petite-caps;
        font-size: 1.5em;
    }
    .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }
    .logout {
        text-decoration: none;
        background-color: rgb(255 0 255 / 30%);
        color: rgb(255, 0, 255);
        padding: 0.6em 1em;
        border-radius: 5px;
        font-weight: 400;
        font-variant-caps: all-petite-caps;
        font-size: 1.5em;
        outline: none;
        border: none;
    }
</style>
