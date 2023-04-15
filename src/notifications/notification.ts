// Import styles (automatically injected into <head>).
import './notification.css';

class NotificationManager {

    private static notificationList: HTMLOListElement | undefined;
    private static instance: NotificationManager | undefined;
    private static isCleaningUp = false;

    private constructor() {
        const notificationList = document.getElementById('notification-list');
        if (notificationList instanceof HTMLOListElement) {
            NotificationManager.notificationList = notificationList;
        } else {
            // add notification list to the DOM
            NotificationManager.notificationList = document.createElement('ol');
            NotificationManager.notificationList.id = 'notification-list';
            document.body.appendChild(NotificationManager.notificationList);
        }
        console.debug(`Notification list ${NotificationManager.notificationList === notificationList ? 'already exists' : 'created'}.`);
    }

    public static getInstance(): NotificationManager {
        if (!NotificationManager.instance || !NotificationManager.notificationList) {
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    public static async cleanUp(): Promise<void> {
        // check if the notification list exists
        if (!NotificationManager.notificationList || !NotificationManager.instance || NotificationManager.isCleaningUp) {
            return;
        }
        NotificationManager.isCleaningUp = true;
        // check if the notification list is empty and keep waiting
        while (NotificationManager.notificationList.childElementCount > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        // remove the notification list from the DOM
        NotificationManager.notificationList.remove();
        NotificationManager.notificationList = undefined;
        NotificationManager.instance = undefined;
        NotificationManager.isCleaningUp = false;

        console.debug('Notification list removed.');
    }

    private createNotification(message: string, type = 'info'): HTMLLIElement {
        console.debug('Creating notification: ' + { message: message, type: type });
        const notification = document.createElement('li');
        notification.classList.add('notification');
        switch (type) {
            case 'info':
            case 'warning':
            case 'error':
            case 'success':
              notification.classList.add(type);
              break;
            default:
              throw new Error(`Invalid notification type: ${type}`);
          }          
        notification.innerHTML = message;
        notification.addEventListener('click', () => {
            this.closeNotification(notification);
        });
        return notification;
    }

    public closeNotification(notification: HTMLLIElement): void {
        notification.classList.remove('show');
        console.debug('Closing notification: ', notification);
        setTimeout(() => {
            notification.remove();
        }, 510);
    }
    
    // add "showNotification" as a method of the class
    private showNotification(notification: HTMLLIElement, timeInMS: number = 3000): void {
        notification.classList.add('show');
        setTimeout(() => {
            this.closeNotification(notification);
        }, timeInMS);
    }
    
    // add "addNotification" as a method of the class
    public addNotification(message: string, type = 'info', timeInMS: number = 3000): HTMLLIElement {
        type = type.toLowerCase();
        if (NotificationManager.notificationList!.childElementCount >= 5) {
            this.closeNotification(NotificationManager.notificationList!.firstElementChild as HTMLLIElement);
        }
        const notification = this.createNotification(message, type);
        NotificationManager.notificationList!.appendChild(notification);
        this.showNotification(notification, timeInMS);
        return notification;
    }
    
    // add and remove notifications with a 2 second delay
    private testNotifications(): void {
        const notificationTypes = [undefined, 'info', 'warning', 'error', 'success'];
        for (let i = 0; i < notificationTypes.length; i++) {
            setTimeout(() => {
                this.addNotification(`This is a ${notificationTypes[i]} notification.`, notificationTypes[i]);
            }, 500 + 2000 * Math.random());
        }
        
        // add a long notification
        setTimeout(() => {
            this.addNotification('This is a too long notification to test how long a notification can get without messing up the screen and stuff like that. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl vel nisl. Nullam auctor, nisl eget ultricies lacinia...');
        }, 2500);
        
        // remove the notifications after 10 seconds
        setTimeout(() => {
            const notifications = NotificationManager.notificationList!.getElementsByClassName('notification');
            for (let i = 0; i < notifications.length; i++) {
                this.closeNotification(notifications[i] as HTMLLIElement);
            }
        }, 15000);
    }
}

export default NotificationManager;