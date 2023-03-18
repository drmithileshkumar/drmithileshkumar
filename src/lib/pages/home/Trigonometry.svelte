<script>
    import { ripple } from '$lib/ui/ripple.js';
</script>
<div class="trigonometry">
    <div class="title">Trigonometry</div>
    <div class="target">
        <span class="label">Target</span>
        <span class="value">Class 11 + 12</span>
    </div>
    <div class="date">
        <span class="label">Starting</span>
        <div class="value">15 April, 2023</div>
    </div>
    <div class="duration">
        <span class="label">Duration</span>
        <span class="value">2 months</span>
    </div>
    <div class="price">
        <span class="label">Price</span>
        <span class="value">Rs 2000</span>
    </div>
    <!-- <div class="syllabus">
        <span class="label">Syllabus</span>
        <span class="value">Syllabus</span>
    </div> -->
    <div class="action">
        <a href="https://mathril.com/register" use:ripple>Register</a>
    </div>
</div>
<style>
    .trigonometry {
        width: min(90vw, 500px);
        position: relative;
        background-image: url('/announcement/perspective.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 0 1em;
        color: white;
        border-radius: 10px;
        overflow: hidden;
    }
    .title {
        font-size: 2em;
        margin-bottom: 0;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 9px 3px 5px rgba(81, 81, 81, 0.445);
        color: rgb(7 68 75);
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .target, .date, .duration, .price {
        display: flex;
        justify-content: space-between;
        line-height: 1.4em;
    }
    .action {
        display: flex;
        justify-content: center;
        padding: 1em;
    }
    .action a {
        background-color: white;
        padding: 0.5em 0.7em;
        border-radius: 5px;
        font-size: 1.1em;
    }
</style>