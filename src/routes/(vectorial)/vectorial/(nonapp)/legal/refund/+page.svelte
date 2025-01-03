<script>
    import Refund from "$lib/footer/Refund.svelte";
    import Card, { Content } from "@smui/card";
    import { currentPath } from "$lib/stores";
    $currentPath = "Refund Policy";
</script>

<svelte:head>
    <title
        >Refund Policy | Vectorial.app – Fair Refunds for Online SVG Editor</title
    >
    <meta
        name="description"
        content="Our Refund Policy at Vectorial.app ensures a fair process for refunds. Discover how we handle refunds and our commitment to customer satisfaction."
    />
    <meta
        name="keywords"
        content="Vectorial.app Refund Policy, Online SVG Editor, Fair Refunds, Customer Satisfaction, Money-Back Guarantee"
    />
    <link rel="canonical" href="https://www.drmithileshkumar.com/vectorial/legal/refund" />
</svelte:head>
<Card>
    <Content>
        <Refund />
    </Content>
</Card>
