<script>
    import Terms from "$lib/vectorial/footer/Terms.svelte";
    import Card, { Content } from "@smui/card";
    import { currentPath } from "$lib/vectorial/stores";
    $currentPath = "Terms and Conditions";
</script>

<svelte:head>
    <title
        >Terms and Conditions | Vectorial.app – Trusted Online SVG Editor</title
    >
    <meta
        name="description"
        content="Our Terms and Conditions at Vectorial.app govern the use of our services. Understand your rights, responsibilities, and our commitment to maintaining a trusted environment."
    />
    <meta
        name="keywords"
        content="Vectorial.app Terms and Conditions, Online SVG Editor, User Agreement, Service Terms, Responsible Usage"
    />
    <link
        rel="canonical"
        href="https://www.drmithileshkumar.com/vectorial/legal/terms"
    />
</svelte:head>
<Card>
    <Content>
        <Terms />
    </Content>
</Card>
