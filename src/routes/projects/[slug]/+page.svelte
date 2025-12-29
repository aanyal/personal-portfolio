<script>
    import { error } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import Label from '../../Label.svelte';

    // export let data;
    let { data } = $props();
    
    let file_data = $state({});
    let project_name = "";
    let subheadings = $state([]);
    
    async function loadData() {
        const file_path = `../../../display-data/projects/${data.slug}.json`;
        const module = await import(`../../../display-data/projects/${data.slug}.json`);
        file_data = module.default;
        
        if (file_data) {
            file_data = JSON.parse(JSON.stringify(file_data));
            console.log(file_data.sub_headings);

            for (const [key, value] of Object.entries(file_data.sub_headings)) {
                subheadings.push(key);
            }

        } else {
            error(404, {
                message: 'Not found'
            });
        }
    }


    onMount(() => {
        loadData();
    });
</script>

<div style="display: flex; margin: 120px 30px 30px 30px;">
    <div class="left-column">
        <div class="left-section">
            <div class="extra_padding"> 
                <p>{file_data.start_date} - {file_data.end_date}</p>
            </div>

            <div class="extra_padding">
                <!-- <img src="profile_picture(3).jpeg" alt="profile" class="profile_picture"> -->

            <video autoplay loop muted class="banner-image ">
                <source src="../images/projects/flappy-drone/cover-video.mp4" type="video/mp4" />
            </video>

            </div>

            <br>

            <div class="extra_padding"> 
                <h2 style="padding-bottom: 0px; margin-top: -18px">{file_data.title}</h2>

                <div class="container flex-wrap" style="margin-top: -8px; margin-bottom: 5px">
                    {#each file_data.skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>
                
                <p style="margin-top: 0px;">{file_data.project_type}</p>

                <br/>
                {#each subheadings as each_subheading}
                    <p style="margin: 0px;">--- {each_subheading}</p>
                {/each}
            </div>
        </div>

    </div>

    <div class="right-column">

        <div class="center_contents">
            {#each subheadings as each_subheading}
                <h3>{each_subheading}</h3>
                <h4 style="color: white; margin-top: -12px"> - hello</h4>
            {/each}
        </div>
    </div>
</div>