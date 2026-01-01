<script>
    // @ts-nocheck

    import SkillsPreview from "./SkillsPreview.svelte";
    import ProjectPreview from "./ProjectPreview.svelte";
    import Header from "../Header.svelte";
    import LineBreak from "../LineBreak.svelte";
    import Label from "../Label.svelte";

    import eachSkill from '../../display-data/skills-data.json';
    import projectPreview from '../../display-data/project-preview.json';

    import { onMount } from 'svelte';
    import CursorEffect from "../CursorEffect.svelte";
    
    let projectEnteries = Object.entries(projectPreview);
    let skillEnteries = Object.entries(eachSkill);

    /**
     * Chunks an array into smaller arrays of a specified size.
     * @param {Array<Object>} arr - The original array.
     * @param {number} size - The size of each chunk.
     * @returns {Array<Array<Object>>} The chunked array.
     */
    function chunkData(arr, size) {
        // console.log(skillEnteries);
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size))
        }
        return chunkedArray;
    }

    const chunckedSkillEnteries = chunkData(skillEnteries, 2);
    const chunckedProjectEnteries = chunkData(projectEnteries, 2);
</script>

<div class = "name-section" id="home">
    <section>
        <p style="padding-bottom: 30px"> Hello World! My name is </p>
        <div>
            <h1><span class="text-spacer"></span><span class="top-name">AANYA</span></h1> 
            
            <h1 class="bottom-name">LAKHANI</h1>
        </div>
    </section>
</div>

<div class="center-contents">
    <div>
        <section id="about" class="general-section container">
            <div class="left-column">
                <img src="profile-picture(3).jpeg" alt="profile" class="profile-picture">
            </div>
            <div class="right-column">
                <div>
                    <h2>About Me</h2>

                    <p>Sophomore at UC Irvine proficient in Java, C++, and Python through rigorous coursework, internships, and hands-on
            projects. Skilled in Adobe Creative Suite, with experience in digital marketing and media development. Exceptional
            communication skills, meticulous attention to detail, and ability to thrive in a team environment. </p>
                </div>
                
            </div>
        </section>

        <div class="center-contents">
            <hr/>
        </div>

        <section id="skills" class="general-section">
            <div class="each-section">
                <h2 class="mb-7">Skills</h2>
                <div class="contents">
                    {#each chunckedSkillEnteries as skillChunk, i}
                        <div class="container">

                        {#each skillChunk as [skill_name, value], i}
                            <SkillsPreview 
                                skill_name={skill_name}
                                skill_experience={value.experience}
                                expertise_rating={value.expertise}
                            />
                            {#if i%2 == 0}
                                <div style="width:80px"></div>
                            {/if}
                        {/each}
                        
                        {#if i < chunckedSkillEnteries.length-1}
                            <div style="height:80px"></div>
                        {/if}
                            
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <div class="center-contents">
            <hr/>
        </div>

        <section id="portfolio" class="general-section container">
            <div class="each-section">
                <h2>Portfolio</h2>
                {#each chunckedProjectEnteries as projectChunk, i}
                    <div class="contents" style="display:flex; flex-direction: rows; ">
                        {#each projectChunk as [title, contents], i}
                            <ProjectPreview direction={i%2 == 0 ? "left" : "right"}
                                            title={title}
                                            start_date={contents.start_date}
                                            end_date={contents.end_date}
                                            project_type={contents.project_type}
                                            short_description={contents.short_description}
                                            skills={contents.skills}
                                            slug={contents.slug}/>
                        {/each}
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>


    