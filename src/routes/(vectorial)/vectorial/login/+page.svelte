<script>
    // @ts-nocheck
        import { enhance } from '$app/forms';
        import { goto, invalidateAll } from '$app/navigation'
        import { page } from '$app/stores'
        import { loggedInUser, profileImage} from '$lib/vectorial/stores';
        import { clickOutside } from '$lib/vectorial/utils/clickOutside';
        
        import ScanQR from '$lib/vectorial/qr/ScanQR.svelte';
        import GenerateQR from '$lib/vectorial/qr/GenerateQR.svelte';
        import Button from '$lib/vectorial/ui/Button.svelte';
        import Label from '$lib/vectorial/ui/Label.svelte';
        import Textfield from '$lib/vectorial/ui/Textfield.svelte';
        import Numberfield from '$lib/vectorial/ui/Numberfield.svelte';
        import SegmentedButton from '$lib/vectorial/ui/SegmentedButton.svelte';
        import Segment from '$lib/vectorial/ui/Segment.svelte';
        
        let isLogin = false;
        let authMode = ['Log in', 'Sign up'];
        let showProducts = false, isSignup = null;
        let error;
        let phone, name;
        let generateQR = false;
        let ids, privateID, otpID, publicID, profile;
        let loginStatus = 'Login', scanned = false;
        const readFromScan = (event) => {
            publicID = event.detail.filename;
            let data = event.detail.data.split(' ');
            privateID = data[0];
            otpID = data[1];
            scanned = true;
        }
        function logout() {
            document.cookie = 'jwt=; Max-Age=0; Path=/;'
            $page.data.user = null
            goto('/')
        }
        const login = async () => {
            loginStatus = 'Waiting...';
            // console.log('publicID', publicID, '')
            const res = await fetch('/vectorial/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    phone,
                    publicID,
                    privateID,
                    otpID
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
    
            if (!res.ok) {
                error = await res.text()
                // console.error(error)
                loginStatus = 'Failed';
                return
            }
            // let user = await res.json();
            await setProfileImage();
            invalidateAll();
            // goto(`/${$page.data.user.publicID}`)
            
            // if(user)  {
                
            //     await setProfileImage();
               
            //     loginStatus = 'Success';
            
            //     goto(`/subscription`)
            // }
            
            
                  
        }
        const setProfileImage = async () => {
            const res = await fetch(`/vectorial/api/profile`);
            
            if(!res.ok) {
                alert('Failed to load image');
                return
            }
            
            let imageData = await res.blob();
            
            // console.log(imageData)
            
            if(imageData.size === 0) {
                profileImage.set('/avatar.svg');
                return;
            }
            profile = URL.createObjectURL(imageData);
            let reader = new FileReader();
            reader.readAsDataURL(imageData);
            reader.onload = e => {
            	profile = e.target.result;
                profileImage.set(profile);
            }
        }
        const sanitizeName = () => {
            name = name.trim()
            let parts = name.split(' ');
            name = parts.map(part => part[0].toUpperCase() + part.slice(1)).join(' ');
        }
        const signup = async () => {
            sanitizeName();
            // console.log('posting...')
            const res = await fetch('/vectorial/api/signup', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    phone
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            // console.log('posted...')
            if (!res.ok) {
                error = await res.text()
                if(error === 'User already exists!') {
                    alert('Account already exists. Contact us on WhatsApp 8235463666 to verify.')
                }
                // console.error(error)
                goto('/')
            }
            ids = await res.json();
            privateID = ids.privateID;
            publicID = ids.publicID;
            otpID = ids.otpID;
            generateQR = true;
        }
        
    </script>
<style>
    .phone, .name {
        /* display: flex;
        flex-direction: row;
        gap: 0.2em;
        padding: 0.5em 0em;
        justify-content: flex-start;
        align-items: center; */
        width: 100%;
    }
    /* .phone p {
        min-width: 175px;
        border: 1px solid rgb(187, 187, 187);
        padding: 0.3em 0.5em;
    } */
    article {
        width: min(400px, 90vw);
        margin: auto;
        margin-top: 1em;
    }
</style>
<article>
        <div class="settingscontent menusurface" use:clickOutside>
                    
            {#if $page.data.user && !(isSignup === 'Sign up')}
                <div class="signed">
                    
                    <span style="cursor:pointer;" on:click={() => goto(`/${$page.data.user.publicID}`)}>{$page.data.user.name}</span>
                    <form use:enhance method="POST" action="?/logout">
                        <!-- <button class="btn btn-outline-danger">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->
                        <Button class="logout">Log out</Button>
                    </form>
                    
                </div>
                
            {:else}
                <div class="toggle">
                    <SegmentedButton segments={authMode} let:segment singleSelect bind:selected={isSignup}>
                        <Segment title={segment} segment={segment}>{segment}</Segment>
                    </SegmentedButton> 
                    
                </div>
            {/if}
        </div>
        {#if isSignup !== 'Sign up'}
            <h3>Login</h3>
            <div class="phone">
                <Numberfield bind:value={phone} placeholder="0000000000" label="Phone" />
            </div>
            <br>
            {#if phone}
                <ScanQR on:scanned={readFromScan} />
            {/if}
            <br>
            {#if scanned}
            <Button on:click={login}>
                <Label>Login</Label>
            </Button>
            {/if}
        {:else}
            <h3>Sign up</h3>
            <div class="name">
                <!-- <span class="material-icons">person</span>
                <p contenteditable="true" bind:textContent={name}></p> -->
                <Textfield bind:value={name} placeholder="Firstname Surname" label="Name" />
            </div>
            {#if name}
                <div class="phone">
                    <!-- <span class="material-icons">phone</span>
                    <p contenteditable="true" bind:textContent={phone}></p> -->
                    <Numberfield bind:value={phone} placeholder="0000000000" label="Phone" />
                </div>
            {/if}
            {#if phone}
            <Button on:click={signup}>
                <Label>Sign up</Label>
            </Button>
            {/if}
            {#if generateQR}
                <GenerateQR data={privateID + ' ' + otpID} filename={publicID} on:saved={login} />
            {/if}
        {/if}
</article>
    