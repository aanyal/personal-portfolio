<script lang="ts">
    import Label from '../../Label.svelte';
	import type { PageData } from './$types';
    import {PortableText} from '@portabletext/svelte'

	interface Props {
		data: PageData;
	}

    const monthNames = ["January.", "February", "March", 
                        "April", "May", "June", "July", 
                        "August", "September", "October", 
                        "November", "December"];

    let data = $props();
    let details = data.data.pageData;

    import { asset } from '$app/paths';
</script>

{#if details != "none"}
<div class="project-details">
    <div style="display: flex; margin: 120px 30px 30px 30px;">
        <div class="left-column">
            <div class="left-section">
                <div class="extra_padding"> 
                    <p>
                        {monthNames[new Date(details.startDate).getMonth()] 
                        + " " + 
                        new Date(details.startDate).getFullYear()} 
                        
                        - 

                        {(details.endDate.present) ? "Present" : 
                        monthNames[new Date(details.endDate.endDate).getMonth()] 
                        + " " + 
                        new Date(details.endDate.endDate).getFullYear()}
                    </p>
                </div>

                <div class="extra_padding">
                    {#if details.cover.isVideo }
                        <video autoplay loop muted class="banner-image ">
                            <source src={asset(details.assetsPath + '/' + details.cover.visuals)} type="video/mp4" />
                        </video>
                    {:else}
                        <img src={asset(details.assetsPath + '/' + details.cover.visuals)} alt="cover" class="profile_picture">
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
                        {#if each_subheading.isHeading}
                            <a style="color: white" href="#{each_subheading.heading}">--- {each_subheading.heading}</a>
                            <br>
                        {:else}
                            <div style="margin-left: 40px; margin-bottom: 0px; margin-top: 0px; display: flex;">
                                <p style="margin-right: 10px">- </p>
                                <a style="color: white;" href="#{each_subheading.heading}">{each_subheading.heading}</a>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>

        </div>

        <div class="right-column">

            <div class="center_contents">
                {#each details.content as each_subheading}
                    <div id="{each_subheading.heading}">

                        {#if each_subheading.isHeading}
                            <h3>{each_subheading.heading}</h3>
                        {:else}
                            <h4>{each_subheading.heading}</h4>
                        {/if}

                        {#if each_subheading.visuals.hasVisuals}
                            <div style="display: flex; flex-direction: row; margin-top: 10px; margin-bottom: 25px">
                                <div style="width: {each_subheading.visuals.size}%">
                                    {#if each_subheading.visuals.isVideo}
                                        <video autoplay loop muted class="banner-image ">
                                            <source src={asset(details.assetsPath + '/' + each_subheading.visuals.path)} type="video/mp4" />
                                        </video>
                                    {:else}
                                        <img src={asset(details.assetsPath + '/' + each_subheading.visuals.path)} alt="{each_subheading.heading}" style="border-radius: 10px"/>
                                    {/if}
                                </div>
                                <div style="width: {100 - each_subheading.visuals.size}%; margin-left: 20px; display:flex; align-items: center">
                                    <PortableText value={each_subheading.text}/>
                                </div>
                            </div>
                        {:else}
                            <PortableText value={each_subheading.text}/>
                        {/if}
                    </div>
                {/each}
            </div>

        </div>

    </div>
</div>
{/if}