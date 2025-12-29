<script lang="ts">
    import { error } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import Label from '../../Label.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

    let data = $props();
    let details = data.data.pageData[0];
    let slug = data.params.slug;
</script>

<div style="display: flex; margin: 120px 30px 30px 30px;">
    <div class="left-column">
        <div class="left-section">
            <div class="extra_padding"> 
                <p>{details.startDate} - {details.endDate}</p>
            </div>

            <div class="extra_padding">
                <!-- <img src="profile_picture(3).jpeg" alt="profile" class="profile_picture"> -->

                <video autoplay loop muted class="banner-image ">
                    <source src="../images/projects/flappy-drone/cover-video.mp4" type="video/mp4" />
                </video>

            </div>

            <br>

            <div class="extra_padding"> 
                <h2 style="padding-bottom: 0px; margin-top: -18px">{details.title}</h2>

                <!-- <div class="container flex-wrap" style="margin-top: -8px; margin-bottom: 5px">
                    {#each details.skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>
                
                <p style="margin-top: 0px;">{details.project_type}</p>

                <br/>
                {#each subheadings as each_subheading}
                    <p style="margin: 0px;">--- {each_subheading}</p>
                {/each} -->
            </div>
        </div>

    </div>

    <div class="right-column">

        <!-- <div class="center_contents">
            {#each subheadings as each_subheading}
                <h3>{each_subheading}</h3>
                <h4 style="color: white; margin-top: -12px"> - hello</h4>
            {/each}
        </div> -->

    </div>

</div>