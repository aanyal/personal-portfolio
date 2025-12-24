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

    .scale-beginner {
        background-image: linear-gradient(to right, rgb(9, 177, 0) , rgb(7, 134, 0));
    }
    .scale-intermediate {
        background-image: linear-gradient(to right, rgb(208, 239, 0) , rgb(255, 179, 0));
    }
    .scale-expert {
        background-image: linear-gradient(to right, rgb(255, 98, 31) , rgb(255, 0, 0));
    }
</style>

<div class="container" style="width: 100%;">
        
    <div style="width: 100%; padding-left: 20px">
        <div class="container" style="justify-content: space-between; margin-bottom: 3px;">
            <p class="label-text">{skill_name}</p>
            <p class="label-text">{skill_experience} year{parseInt(skill_experience) > 1 ? "s" : ""}</p>
        </div>

        <div class="scale">
            {#if parseInt(skill_experience) > 5}
                <div class="scale scale-value scale-expert" style="width: {expertise_rating}%;">
                </div>
            {:else if parseInt(skill_experience) > 3}
                <div class="scale scale-value scale-intermediate" style="width: {expertise_rating}%;">
                </div>
            {:else}
                <div class="scale scale-value scale-beginner" style="width: {expertise_rating}%;">
                </div>
            {/if}
        </div>
    </div>
</div>