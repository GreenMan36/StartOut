
export default class SkillCounter {

    constructor() {
        console.debug("Skill Counter created.");
    }

    /**
     * Finds the button in the DOM by either the aria-label or the data-test attribute.
     * And clicks it.
     * @param text The text to search for in the button.
     * @throws Error if the button cannot be found.
     * @example
     * await sCounter.clickButton('Show all skills');
     * await sCounter.clickButton('Dismiss');
     */
    public async clickButton(text: string) {
        // declare the function to find the buttons
        const findButtonInDOM = () => {
            // check for the aria label/data test first
            let button = document.querySelector(`button[aria-label="${text}"], button[data-test="${text}"]`);
            // if it's not found in there, then it must be in the content
            if (!button) {
                const buttons = Array.from(document.getElementsByTagName('button') as HTMLCollectionOf<HTMLButtonElement>);
                // @ts-ignore
                button = buttons.find(button => button.textContent.trim() === text);
            }
            // button has either been found or not yet
            return button;
        };
            
        // function to find the button
        const waitForButton = async () => {
            let button = findButtonInDOM();
            while (!button) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                button = findButtonInDOM();
            }
            return button;
        };

        let button = await waitForButton();
        const clickableButton = button as HTMLButtonElement;
        clickableButton.click();
    }

    public async countAllSkills() {
        await this.waitForSkillList();
        const skillParent = document.querySelector('.job-details-skill-match-status-list') as HTMLUListElement;
        const skillList = skillParent.children as HTMLCollectionOf<HTMLLIElement>;
        const skills = {} as { [key: string]: number };
        console.debug("Skill List: ", skillList);
        // count all the skills, add them to the list
        for (let i = 0; i < skillList.length; i++) {
            const skillDiv = skillList[i].querySelector('div[aria-label]') as HTMLDivElement;
            if (skillDiv === null) {
                throw new Error("Could not find the skill div.");
            }
            const skillName: string = skillDiv.textContent?.trim() ?? '';
            skills[skillName] = skills[skillName] ? skills[skillName] + 1 : 1;
        }
        return skills;
    }

    public saveSkillCountResult(currentSkills: { [key: string]: number }) {
        // Check if there's already a result in localStorage
        let localStorageSkills = localStorage.getItem('skills');
        let storedSkills = {} as { [key: string]: number };
        if (localStorageSkills) {
            storedSkills = JSON.parse(localStorageSkills);
        }
        console.debug("Current Skills: ", currentSkills);
        console.debug("Stored Skills: ", storedSkills);
        // get the current skills and add them to the storedSkills object
        for (const skill in currentSkills) {
            if (storedSkills.hasOwnProperty(skill)) {
                storedSkills[skill] += currentSkills[skill];
            } else {
                storedSkills[skill] = currentSkills[skill];
            }
        }
        // Save the updated skills object to localStorage
        localStorage.setItem('skills', JSON.stringify(storedSkills));
        this.printSkillCountTable();
    }

    private printSkillCountTable() {
        // Get the skills from localStorage
        const storedSkills = this.getStoredSkills();
        if (storedSkills) {
            console.table(storedSkills);
        } else {
            console.log('No skill count data found in local storage.');
        }
    }

    private async waitForSkillList() {
        let skillList = document.querySelector('.job-details-skill-match-status-list') as HTMLUListElement;
        while (!skillList) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            skillList = document.querySelector('.job-details-skill-match-status-list') as HTMLUListElement;
            console.debug("Skill List Found: ", skillList);
        }
        while (skillList.children.length === 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        console.debug("Skill List Has Children: ", skillList);
        return Promise.resolve();
    }

    public getStoredSkills() {
        const localStorageSkills = localStorage.getItem('skills') ?? '{}';
        const storedSkills = JSON.parse(localStorageSkills) as { [key: string]: number };
        return storedSkills;
    }

    public skillsChanged(oldSkills: { [key: string]: number }): boolean {
        const newStoredSkills = this.getStoredSkills();
        if (newStoredSkills) {
            for (const skill in oldSkills) {
                if (newStoredSkills.hasOwnProperty(skill)) {
                    if (newStoredSkills[skill] !== oldSkills[skill]) {
                        return true;
                    }
                } else {
                    return true;
                }
            }
        } else {
            return true;
        }
        return false;
    }
}
