<link rel="stylesheet" href="/styles/homepage.css">

<script>
    let { skill_name, skill_experience, expertise_rating } = $props();
</script>

<style>
    .label-text {
        font-size: 18px; 
        margin: 0px;
    }

    .scale {
        width: 100%;
        height: 21px; 
        background-color: #1e1e1e;
        border-radius: 13px;
        padding: 0.2px;
    }

    .scale-value {
        height: 100%;
        width: 100%;
        background-color: #00fbff;
        border: none;
        border-radius: 12px;
    }
</style>

<div class="container" style="width: 100%;">
        
    <div style="width: 100%; padding-left: 20px">
        <div class="container" style="justify-content: space-between; margin-bottom: 3px;">
            <p class="label-text">{skill_name}</p>
            <p class="label-text">{skill_experience} years</p>
        </div>

        <div class="scale">
            <div class="scale scale-value" style="width: {expertise_rating}%;">
            </div>
        </div>
    </div>
</div>