import NotificationManager from './notifications/notification';
import SkillCounter from './jobs/skill-counter';

const mainloop = async () => {
    const nManager = new NotificationManager();
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

mainloop();
