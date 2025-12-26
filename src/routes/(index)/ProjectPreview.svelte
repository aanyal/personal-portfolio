<script>
    import Label from "../Label.svelte";

    let { direction, 
          title, 
          start_date, 
          end_date, 
          project_type, 
          short_description,
          skills,
          slug } = $props();
</script>

<a href="projects/{slug}">
    <div style={`${direction === 'left' ? 'margin-right: 7px' : 'margin-left: 7px'};
                ${direction === 'middle' ? 'margin-right: 7px':''}`}
        class="project-container">

        <div class="center-contents">
            <div style="width: 90%">
                <img src="temp-image.png" alt="project banner" class="banner-image"/>
                <h3 class="pt-3"> {title} </h3>
                <p style="font-size: 14px; margin-bottom: 7px; color: #cfcfcf">{project_type} • {start_date} - {end_date}</p>

                <p style="margin-bottom: 10px"> {short_description} </p>

                <div class="container flex-wrap">
                    {#each skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>

            </div>
        </div>
    </div>
</a>