<link rel="stylesheet" href="/styles/homepage.css">

<script>
    let { logo_link, skill_name, skill_experience } = $props();
</script>

<style>
    .label-text {
        font-size: 20px; 
        margin: 0px;
    }

    .scale {
        width: 100%;
        height: 23px; 
        background-color: black;
        border: 2px solid white;
        border-radius: 5px;
        padding: 0.2px;
    }

    .scale-value {
        height: 100%;
        width: 100%;
        background-color: #00fbff;
        border: none;
        border-radius: 2px;
    }
</style>

<div class="container" style="width: 100%;">
    <img src="{logo_link}" 
        alt="python"
        style="width: 60px; height: 60px">
        
    <div style="width: 100%; padding-left: 20px">
        <div class="container" style="justify-content: space-between; margin-bottom: 3px;">
            <p class="label-text">{skill_name}</p>
            <p class="label-text">{skill_experience} years</p>
        </div>

        <div class="scale">
            <div class="scale scale-value" style="width: 40%;">
            </div>
        </div>
    </div>
</div>