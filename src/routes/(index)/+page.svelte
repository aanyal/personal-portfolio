<script>
    // @ts-nocheck

    import SkillsPreview from "./SkillsPreview.svelte";
    import ProjectPreview from "./ProjectPreview.svelte";
    import Header from "../Header.svelte";
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
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size))
        }
        return chunkedArray;
    }

    const chunckedSkillEnteries = chunkData(skillEnteries, 2);
    const chunckedProjectEnteries = chunkData(projectEnteries, 2);

    let data = $props();
    let projectData = data.data.data;
    const chunckedProjectEnteries2 = chunkData(projectData, 2);
</script>

<div class="name-section" id="home">
    <section>
        <p class="!mb-[4.5rem] lg:!mb-[5rem]"> Hello World! My name is </p>
        <div>
            <h1 class="leading-[0] text-white !text-[120px] lg:!text-[140px] !mb-[5rem] lg:!mb-[6rem]">AANYA</h1>  
            
            <h1 class="leading-[0] text-white !text-[90px] lg:!text-[108px]">LAKHANI</h1>
        </div>
    </section>
</div>

<div class="center-contents">
    <div>
        <section id="about" class="general-section flex-container">
            <div class="left-column">
                <img src="profile-picture.jpeg" alt="profile" class="profile-picture">
            </div>
            <div class="right-column flex items-center">
                <div>
                    <h2>About Me</h2>

                    <p>I’m a sophomore at UC Irvine with experience in Java, C++, and Python 
                        through rigorous coursework, internships, and hands-on projects. I have 
                        a strong interest in web development, with experience building applications 
                        using Django and Flask. I also bring a background in digital marketing 
                        and media development, with proficiency in Adobe Creative Suite. I love 
                        building things that turn ideas into real, usable products!
                    </p>
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
                        <div class="flex-container">

                        {#each skillChunk as [skill_name, value], i}
                            <SkillsPreview 
                                skill_name={skill_name}
                                skill_experience={value.experience}
                                expertise_rating={value.expertise}
                            />
                            {#if i%2 == 0}
                                <div class="h-[30px] lg:w-[80px]"></div>
                            {/if}
                        {/each}
                        
                        <div class="h-[30px] lg:h-[80px]"></div>
                            
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <div class="center-contents">
            <hr/>
        </div>

        <section id="portfolio" class="general-section flex-container">
            <div class="each-section">
                <h2>Portfolio</h2>
                {#each chunckedProjectEnteries2 as projectChunk, i}
                    <div class="w-[100%] pt:[15px] pb:[0px] pl:[20px] pr:[20px] block flex-row lg:flex">
                        {#each projectChunk as project, i}
                            <ProjectPreview direction={i%2 == 0 ? "left" : "right"}
                                            title={project.title}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            projectType={project.projectType}
                                            shortDescription={project.overview}
                                            skills={project.skills}
                                            slug={project.slug.current}
                                            cover={project.cover}
                                            assetsPath={project.assetsPath}/>
                        {/each}
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>


    