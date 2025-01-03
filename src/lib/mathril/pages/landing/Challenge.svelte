<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Icon, Label} from '@smui/button'
</script>
<Card>
    <Content>
        <h1 class="mdc-typography--headline4" style='text-align:center;'>Can you solve it within 10 sec?</h1>
        
        <p style='text-align:center;'>Join the telegram group <a href="https://t.me/askmathril">@askmathril</a></p>
        <Actions style="align-items:center;justify-content:center">
            <Button href="https://t.me/askmathril">
                <Icon><img src="/telegram.svg" alt="telegram" /></Icon>
                <Label>Contact at Telegram</Label>
            </Button>
        </Actions>
    </Content>
</Card>