<script lang="ts">
    import Label from '../../Label.svelte';
	import type { PageData } from './$types';
    import {PortableText} from '@portabletext/svelte'
    import { asset } from '$app/paths';
  import { onMount } from 'svelte';

	interface Props {
		data: PageData;
	}

    const monthNames = ["January.", "February", "March", 
                        "April", "May", "June", "July", 
                        "August", "September", "October", 
                        "November", "December"];

    let data = $props();
    let details = data.data.pageData;

    let innerWidth = $state(0);
    let innerHeight = $state(0);
</script>

<!-- Bind the window properties to your variables -->
<svelte:window bind:innerWidth bind:innerHeight />

<!-- Displaying the values in your markup -->

{#if details != "none"}
<div class="project-details">
    <div class="block lg:flex mt-[100px] lg:mt-[120px] ml-[30px] mb-[30px] mr-[30px]">
        <div class="left-column">
            <div class="left-section">
                <p class="mb-[10px]">
                    {monthNames[new Date(details.startDate).getMonth()] 
                    + " " + 
                    new Date(details.startDate).getFullYear()} 
                    
                    - 

                    {(details.endDate.present) ? "Present" : 
                    monthNames[new Date(details.endDate.endDate).getMonth()] 
                    + " " + 
                    new Date(details.endDate.endDate).getFullYear()}
                </p>

                {#if details.cover.isVideo }
                    <video autoplay loop muted class="banner-image ">
                        <source src={asset(details.assetsPath + '/' + details.cover.visuals)} type="video/mp4" />
                    </video>
                {:else}
                    <img src={asset(details.assetsPath + '/' + details.cover.visuals)} alt="cover" class="profile_picture">
                {/if}
                
            <br>
                <h2 class="-mt-[18px]">{details.title}</h2>

                <div class="flex flex-wrap -mt-[8px] mb-[7px]">
                    {#each details.skills as skill}
                        <Label skill_name={skill}/>
                    {/each}
                </div>
                
                <p>{details.projectType}</p>

                <div class="center-contents mt-[20px] mb-[20px] lg:mb-[0px]">
                    <hr class="w-[100%]"/>
                </div>

                <div class="hidden lg:block">
                    <br/>
                    {#each details.content as each_subheading}
                        {#if each_subheading.isHeading}
                            <a href="#{each_subheading.heading}">--- {each_subheading.heading}</a>

                            <br>
                        {:else}
                            <div class="ml-[40px] mb-[0px] mt-[0px] flex">
                                <p class="mr-[10px]">- </p>
                                <a href="#{each_subheading.heading}">{each_subheading.heading}</a>
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
                            <div class="block md:flex flex-row mt-[10px] mb-[25px]">
                                <div style="{innerWidth < 768 ? 'width: 100%' : 'width:' + each_subheading.visuals.size + '%'}">
                                    {#if each_subheading.visuals.isVideo}
                                        <video autoplay loop muted class="banner-image ">
                                            <source src={asset(details.assetsPath + '/' + each_subheading.visuals.path)} type="video/mp4" />
                                        </video>
                                    {:else}
                                        <img src={asset(details.assetsPath + '/' + each_subheading.visuals.path)} alt="{each_subheading.heading}" class="rounded-md"/>
                                    {/if}
                                </div>
                                <div style="{innerWidth < 768 ? 'width: 100%' : 'width:' + (100-each_subheading.visuals.size) + '%'}" class="ml-[0px] md:ml-[20px] flex items-center mt-[15px] md:mt-[0px]">
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