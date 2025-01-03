<script>
    //@ts-nocheck
    import Message from "$lib/vectorial/ui/Message.svelte";
    import Card, {Content, Actions} from '@smui/card';
    import Button, { Label} from '@smui/button';
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";
    export let data;
    let { subscription } = data;
    $: ({ subscription } = data);

    import { post } from "$lib/vectorial/utils/post";
    import { put } from "$lib/vectorial/utils/put";
    import { createEventDispatcher } from "svelte";
    import { INVOICE, currentPath } from "$lib/vectorial/stores";
    import { page } from "$app/stores";
    $currentPath = "Subscription";
    let dispatch = createEventDispatcher();
    let offer = 100;
    let status = false;
    let DEBUG = false;
    let KEY_ID = "rzp_live_lMsk4ZYh8eG2YH";
    let order_id;
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
                amount: 118000,
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
        if ($page.data.user) invalidate(`/vectorial/api/subscription`);
        if (subscription.message === "Renew subscription.") {
            alert("Please renew Subscription");
            return;
        }
    });
    const upgradeSubscription = async () => {};
    let W;
    
</script>

<svelte:head>
    <title>Subscription | Vectorial.app – Premium SVG Editor Plans</title>
    <meta
        name="description"
        content="Upgrade your Vectorial.app experience with our premium subscription plans. Gain access to advanced features and dedicated support for your SVG drawing needs."
    />
    <meta
        name="keywords"
        content="Vectorial.app Subscription, Premium SVG Editor, Online SVG Editor, SVG Drawing Plans, Latex Support in SVG, Web-based SVG Editor, Research Paper Graphics Tool, Academic Illustration Software"
    />

    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/subscription" />
</svelte:head>
<article class="container mdc-typography--body2">
    {#if data.subscription && data.subscription.type === "Trial"}
        <Card>
            <Content>
                <p>
                    Congratulations! You have <strong>one week</strong> of free subscription
                    to try all features.
                </p>
            </Content>
        </Card>
    {/if}
    <Card>
        <Content class="mdc-typography--body2">
            <h1 class="mdc-typography--headline6" style="margin: 0;">
                Current Subscription
            </h1>
            {#if !$page.data.user}
                <p>Sign up to get one week free trial for all classes.</p>
            {/if}
            {#if data.subscription && data.subscription.message === "Valid"}
                <p>
                    Your subscription type is <span class="type"
                        >{data.subscription.type}</span
                    >
                    and expires on
                    <span class="expire"
                        >{data.subscription.expire.date}-{data.subscription
                            .expire.month + 1}-{data.subscription.expire.year}
                    </span>.
                </p>

                <p>
                    If the subscription status is <span class="expire"
                        >expired</span
                    >, try to refresh the page. If it does not change and you
                    think there is a mistake, contact at support@drmithileshkumar.com/vectorial
                </p>
            {:else if $page.data.user}
                <h3 class="mdc-typography--headline6">
                    Your subscription has <span class="expire">expired.</span>.
                </h3>
            {/if}
        </Content>
        <Actions>
            <Actions>
                {#if !$page.data.user}
                    <Button on:click={() => goto(`/auth`)}>Sign up</Button>
                {:else}
                    <Button on:click={() => goto(`/${$page.data.user.publicID}/invoices`)}>Show invoices</Button>
                {/if}
            </Actions>
        </Actions>
    </Card>
    <!-- <Card>
        <Content class="mdc-typography--body2">
            <h1 class="mdc-typography--headline6" style="margin: 0;">
                Upgrade Subscription
            </h1>
            <p>The subscription cycle starts from the date of payment.</p>
        </Content>
        <Actions>
            <Button on:click={() => makePayment("Monthly", 500)}>
                <Label>&#8377; 500/Monthly</Label>
            </Button>
            <Button on:click={() => makePayment("Yearly", 5000)}>
                <Label>&#8377; 5000/Yearly</Label>
            </Button>
        </Actions>
    </Card> -->
    <section class="subscription-container">
        <h1 class="mdc-typography--headline4 title">
            Subscription Plans
        </h1>
        <p class="mdc-typography--body1 description">
            Get access to all features and upgrades with our
            subscription plans.
        </p>
        <div class="plans-container">
            <!-- <Card class="plan-card">
                <Content>
                    <h2 class="mdc-typography--headline5">Monthly Plan</h2>
                    <p class="mdc-typography--headline6">Rs 500/month</p>
                    <ul class="mdc-typography--body1">
                        <li>Access to all features</li>
                        <li>Share drawings</li>
                    </ul>
                </Content>
                <Actions>
                    <Button raised on:click={() => makePayment("Monthly", 500)}>Subscribe</Button>
                </Actions>
            </Card> -->

            <Card class="plan-card">
                <Content>
                    <h2 class="mdc-typography--headline5">Yearly Plan</h2>
                    <p class="mdc-typography--headline6">Rs 1000/year</p>
                    <ul class="mdc-typography--body1">
                        <li>Access to all features</li>
                        <li>Share drawings</li>
                    </ul>
                </Content>
                <Actions>
                    <Button raised on:click={() => makePayment("Yearly", 1000)}>Subscribe</Button>
                </Actions>
            </Card>
        </div>
    </section>
</article>

<style>
    /* .snippet {
        margin-top: 1em;
        padding: 0.5em;
        width: 100%;
        background: rgb(255, 255, 255);
        border-radius: 10px;
    } */
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .type {
        display: inline-block;
        background: rgba(0, 200, 0, 0.1);
        color: rgba(0, 200, 0, 1);
        padding: 0.2em 0.5em;
        border-radius: 0.5em;
    }
    .expire {
        display: inline-block;
        background: rgba(200, 0, 0, 0.1);
        color: rgba(200, 0, 0, 1);
        padding: 0.2em 0.5em;
        border-radius: 0.5em;
    }
    .subscription-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    .title {
        margin-bottom: 1rem;
        /* color: #6200ee; */
    }

    .description {
        margin-bottom: 2rem;
    }

    .plans-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap:0.5em;
    }

    :global(.plan-card) {
        max-width: 300px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        /* background-color: #fff; */
        transition: transform 0.3s, box-shadow 0.3s;
    }

    :global(.plan-card:hover) {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    :global(.plan-card h2) {
        /* color: #6200ee; */
        margin-bottom: 1rem;
    }

    :global(.plan-card p) {
        margin-bottom: 1rem;
    }

    :global(.plan-card ul) {
        padding-left: 1rem;
        list-style: none;
        /* list-style-type: disc; */
        margin-bottom: 1rem;
    }

    /* .Actions {
        display: flex;
        justify-content: center;
        padding: 1rem;
    } */
</style>
