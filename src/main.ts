import NotificationManager from './notifications/notification';
import SkillCounter from './jobs/skill-counter';

const countSkills = async () => {
    const nManager = NotificationManager.getInstance();
    const sCounter = new SkillCounter();

    // open the skills window
    const notif = nManager.addNotification('Recording skills...', 'info', 9e9);
    await sCounter.clickButton('Show all skills');

    // count the skills
    const currentSkills = await sCounter.countAllSkills();
    sCounter.saveSkillCountResult(currentSkills);
    await sCounter.clickButton('Dismiss');

    // close the notification
    if (notif.parentNode) nManager.closeNotification(notif);

    // check if the skills have changed and notify the user
    if (sCounter.skillsChanged(currentSkills)) {
        nManager.addNotification('Successfully recorded skills.', 'success');
    } else {
        nManager.addNotification('Skills have not changed.', 'info');
    }
};

const urlFunctionMap = [
        {
            pattern: /^https:\/\/www\.linkedin\.com\/jobs\/collections\/(recommended|hiring-in-network|)(\/|\?.*)?$/i,
            func: countSkills,
        },
        {
            pattern: /^https:\/\/www\.linkedin\.com\/jobs\/view\/\d+(\/|\?.*)?$/i,
            func: countSkills,
        },
    ];
  
  

const mainloop = async () => {
    const nManager = NotificationManager.getInstance();
    const url = window.location.href.split('?')[0];

    let isSupportedPage = false;

    for (const urlConfig of urlFunctionMap) {
        if (urlConfig.pattern.test(url)) {
            isSupportedPage = true;
            urlConfig.func();
        break;
        }
    }
};

mainloop();
