<script>
    let { skill_name, skill_experience, expertise_rating } = $props();
</script>

<div class="container" style="width: 100%;">
        
    <div style="width: 100%; padding-left: 20px">
        <div class="flex flex-row w-[100%]" style="justify-content: space-between; margin-bottom: 3px;">
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