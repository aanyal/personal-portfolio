<link rel="stylesheet" href="/styles/homepage.css">

<script>
    let { logo_link, skill_name, skill_experience } = $props();
</script>

<style>
    .label-text {
        font-size: 17px; 
        margin: 0px;
    }

    .scale {
        width: 100%;
        height: 18px; 
        background-color: white;
        border: 2px solid white;
        border-radius: 5px;
    }

    .scale-value {
        width: 100%;
        background-color: #ff751f;
        border: none;
        border-radius: 2px;
    }
</style>

<div class="container" style="width: 100%">
    <!-- https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png -->
    <img src="{logo_link}" 
         alt="python"
         style="width: 50px; height: 50px; padding-right: 15px">
        
    <div style="width: 95%">
        <div class="container" style="justify-content: space-between">
            <p class="label-text">{skill_name}</p>
            <p class="label-text">{skill_experience} years</p>
        </div>

        <div class="scale">
            <div class="scale scale-value">
            </div>
        </div>
    </div>
</div>