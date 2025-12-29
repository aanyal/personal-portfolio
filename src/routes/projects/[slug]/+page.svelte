<script lang="ts">
    import Label from '../../Label.svelte';
	import type { PageData } from './$types';
    import {PortableText} from '@portabletext/svelte'

	interface Props {
		data: PageData;
	}

    let data = $props();
    let details = data.data.pageData;
    let slug = data.params.slug;
</script>

<div style="display: flex; margin: 120px 30px 30px 30px;">
    <div class="left-column">
        <div class="left-section">
            <div class="extra_padding"> 
                <p>{details.startDate} - {details.endDate}</p>
            </div>

            <div class="extra_padding">
                {#if details.cover.isVideo }
                    <video autoplay loop muted class="banner-image ">
                        <source src="{details.cover.visuals}" type="video/mp4" />
                    </video>
                {:else}
                    <img src="{details.cover.visuals}" alt="cover" class="profile_picture">
                {/if}
            </div>

            <br>

            <div class="extra_padding"> 
                <h2 style="padding-bottom: 0px; margin-top: -18px">{details.title}</h2>

                <div class="container flex-wrap" style="margin-top: -8px; margin-bottom: 5px">
                    {#each details.skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>
                
                <p style="margin-top: 0px;">{details.projectType}</p>

                <br/>
                {#each details.content as each_subheading}
                    <p style="margin: 0px;">--- {each_subheading.heading}</p>
                {/each}
            </div>
        </div>

    </div>

    <div class="right-column">

        <div class="center_contents">
            {#each details.content as each_subheading}
                <PortableText value={each_subheading.text} />
            {/each}
        </div>

    </div>

</div>