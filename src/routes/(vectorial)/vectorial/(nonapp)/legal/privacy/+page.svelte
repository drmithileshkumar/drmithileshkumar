<script>
    import Privacy from "$lib/vectorial/footer/Privacy.svelte";
    import Card, { Content } from "@smui/card";
    import { currentPath } from "$lib/vectorial/stores";
    $currentPath = "Privacy Policy";
</script>

<svelte:head>
    <title
        >Privacy Policy | Vectorial.app – Secure & Private Online SVG Editor</title
    >
    <meta
        name="description"
        content="At Vectorial.app, your privacy is our priority. Our Privacy Policy outlines the data we collect and how it is used and protected. Learn more about our commitment to privacy protection."
    />
    <meta
        name="keywords"
        content="Vectorial.app Privacy Policy, Online SVG Editor, Data Protection, User Privacy, Secure SVG Creation, GDPR Compliance"
    />
    <link rel="canonical" href="https://www.drmithileshkumar.com/vectorial/legal/privacy" />
</svelte:head>
<Card>
    <Content>
        <Privacy />
    </Content>
</Card>
