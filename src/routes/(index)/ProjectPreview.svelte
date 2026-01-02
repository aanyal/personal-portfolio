<script>
    import Label from "../Label.svelte";
    import { asset } from '$app/paths';

    let { direction, 
          title, 
          startDate, 
          endDate, 
          projectType, 
          shortDescription,
          skills,
          slug,
          cover,
          assetsPath } = $props();

    const monthNames = ["January.", "February", "March", 
                        "April", "May", "June", "July", 
                        "August", "September", "October", 
                        "November", "December"];
</script>

<a href="projects/{slug}">
    <div class={`${direction === 'left' ? 'mr-[0px] lg:mr-[15px]' : 'ml-[0px] lg:ml-[15px]'} project-container mt-[15px] lg:mt-[0px]`}>

        <div class="center-contents">
            <div class="pt-[20px] pl-[20px] pr-[20px]">
                {#if cover.isVideo}
                    <video autoplay loop muted class="banner-image">
                        <source src={asset(assetsPath + '/' + cover.visuals)} type="video/mp4" />
                    </video>
                {:else}
                    <img src="{cover.visuals}" alt="project banner" class="banner-image"/>
                {/if}

                <h3 class="pt-3"> {title} </h3>
                <p class="!text-[14px] !mb-[7px] !text-[#cfcfcf]">
                    {projectType} • {monthNames[new Date(startDate).getMonth()] 
                    + " " + 
                    new Date(startDate).getFullYear()} 
                    
                    - 

                    {(endDate.present) ? "Present" : 
                    monthNames[new Date(endDate.endDate).getMonth()] 
                    + " " + 
                    new Date(endDate.endDate).getFullYear()}</p>

                <p class="mb-[5px]"> {shortDescription} </p>

                <div class="flex flex-wrap">
                    {#each skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>

            </div>
        </div>
    </div>
</a>