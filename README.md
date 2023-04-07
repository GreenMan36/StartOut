![StartOut Logo](./img/StartOutDark.png#gh-dark-mode-only)
![StartOut Logo](./img/StartOutLight.png#gh-light-mode-only)

# StartOut

StartOut is a bookmarklet designed to help new LinkedIn users kickstart their experience on the platform. Whether you're a student, a recent graduate looking to build your professional network, or a job seeker searching for new opportunities, StartOut can help you get started and stand out on LinkedIn.

## Features

StartOut includes the following features:
- [x] **Skill tracking:** StartOut allows you to track the skills required for jobs you view on LinkedIn and provides insights into which skills are most in demand via the browser console.

**Planned features:**
- [ ] **Enhanced Skill tracking:** StartOut will track the skills required for jobs you view on LinkedIn and provide insights into which skills are most in demand, along with a more user-friendly presentation.
- [ ] **Visual enhancements:** StartOut will introduce visual changes to the LinkedIn site to help you see more information per page and make it easier to navigate.
- [ ] **User-friendly:** StartOut is designed to be easy to use, with a simple and intuitive interface that even new users can understand.

## Usage
To use StartOut, create a bookmark with the javascript that starts with `javascript:`. Then, when you're on the LinkedIn site (jobs section), click the StartOut bookmarklet to activate the features. StartOut will start tracking the skills required for jobs you run it on.  
> This snippet might be out of date but its here for ease of use
```javascript
javascript:(function()%7B!function()%7B%22use%20strict%22%3B!function(t%2Ci)%7Bvoid%200%3D%3D%3Di%26%26(i%3D%7B%7D)%3Bvar%20o%3Di.insertAt%3Bif(t%26%26%22undefined%22!%3Dtypeof%20document)%7Bvar%20e%3Ddocument.head%7C%7Cdocument.getElementsByTagName(%22head%22)%5B0%5D%2Cn%3Ddocument.createElement(%22style%22)%3Bn.type%3D%22text%2Fcss%22%2C%22top%22%3D%3D%3Do%26%26e.firstChild%3Fe.insertBefore(n%2Ce.firstChild)%3Ae.appendChild(n)%2Cn.styleSheet%3Fn.styleSheet.cssText%3Dt%3An.appendChild(document.createTextNode(t))%7D%7D(%22li.notification%7Bborder-radius%3A5px%3Bcolor%3A%23fff%3Bfont-family%3ARoboto%2Csans-serif%3Bheight%3Aauto%3Bmargin-bottom%3A0%3Bmax-width%3A300px%3Bopacity%3A0%3Bpadding%3A12px%2020px%3Btransform%3AtranslateX(100px)%20scale(0)%3Btransform-origin%3Abottom%20right%3Btransition-duration%3A.5s%3Btransition-property%3Aall%3Btransition-timing-function%3Aease%7Dli.notification%3Ahover%7Bcursor%3Apointer%7Dli.notification.show%7Bmargin-bottom%3A10px%3Bopacity%3A1%3Btransform%3AtranslateX(0)%20scale(1)%7Dli.notification.info%7Bbackground-color%3A%232196f3%7Dli.notification.warning%7Bbackground-color%3A%23ff9800%7Dli.notification.error%7Bbackground-color%3A%23f44336%7Dli.notification.success%7Bbackground-color%3A%234caf50%7Dol%23notification-list%7Balign-items%3Aflex-end%3Bbottom%3A20px%3Bdisplay%3Aflex%3Bflex-direction%3Acolumn%3Bleft%3A20px%3Blist-style%3Anone%3Bmargin%3A0%3Boverflow-x%3Ahidden%3Boverflow-y%3Ascroll%3Bpadding%3A0%3Bposition%3Afixed%3Bright%3A20px%3Bz-index%3A9999%7D%22)%3Bclass%20t%7Bstatic%20notificationList%3Bconstructor()%7Bconst%20i%3Ddocument.getElementById(%22notification-list%22)%3Bi%20instanceof%20HTMLOListElement%3Ft.notificationList%3Di%3A(t.notificationList%3Ddocument.createElement(%22ol%22)%2Ct.notificationList.id%3D%22notification-list%22%2Cdocument.body.appendChild(t.notificationList))%2Cconsole.debug(%60Notification%20list%20%24%7Bt.notificationList%3D%3D%3Di%3F%22already%20exists%22%3A%22created%22%7D.%60)%7DcreateNotification(t%2Ci%3D%22info%22)%7Bconsole.debug(%22Creating%20notification%3A%20%22%2B%7Bmessage%3At%2Ctype%3Ai%7D)%3Bconst%20o%3Ddocument.createElement(%22li%22)%3Bswitch(o.classList.add(%22notification%22)%2Ci)%7Bcase%22info%22%3Acase%22warning%22%3Acase%22error%22%3Acase%22success%22%3Ao.classList.add(i)%3Bbreak%3Bdefault%3Athrow%20new%20Error(%60Invalid%20notification%20type%3A%20%24%7Bi%7D%60)%7Dreturn%20o.innerHTML%3Dt%2Co.addEventListener(%22click%22%2C(()%3D%3E%7Bthis.closeNotification(o)%7D))%2Co%7DcloseNotification(t)%7Bt.classList.remove(%22show%22)%2Cconsole.debug(%22Closing%20notification%3A%20%22%2Ct)%2CsetTimeout((()%3D%3E%7Bt.remove()%7D)%2C500)%7DshowNotification(t%2Ci)%7Bt.classList.add(%22show%22)%2CsetTimeout((()%3D%3E%7Bthis.closeNotification(t)%7D)%2Ci)%7DaddNotification(i%2Co%3D%22info%22%2Ce%3D5e3)%7Bo%3Do.toLowerCase()%3Bconst%20n%3Dthis.createNotification(i%2Co)%3Breturn%20t.notificationList.appendChild(n)%2Cthis.showNotification(n%2Ce)%2Cn%7DtestNotifications()%7Bconst%20i%3D%5Bvoid%200%2C%22info%22%2C%22warning%22%2C%22error%22%2C%22success%22%5D%3Bfor(let%20t%3D0%3Bt%3Ci.length%3Bt%2B%2B)setTimeout((()%3D%3E%7Bthis.addNotification(%60This%20is%20a%20%24%7Bi%5Bt%5D%7D%20notification.%60%2Ci%5Bt%5D)%7D)%2C500%2B2e3*Math.random())%3BsetTimeout((()%3D%3E%7Bthis.addNotification(%22This%20is%20a%20too%20long%20notification%20to%20test%20how%20long%20a%20notification%20can%20get%20without%20messing%20up%20the%20screen%20and%20stuff%20like%20that.%20Lorum%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Nullam%20auctor%2C%20nisl%20eget%20ultricies%20lacinia%2C%20nunc%20nisl%20aliquam%20nisl%2C%20eget%20ultricies%20nisl%20nisl%20vel%20nisl.%20Nullam%20auctor%2C%20nisl%20eget%20ultricies%20lacinia...%22)%7D)%2C2500)%2CsetTimeout((()%3D%3E%7Bconst%20i%3Dt.notificationList.getElementsByClassName(%22notification%22)%3Bfor(let%20t%3D0%3Bt%3Ci.length%3Bt%2B%2B)this.closeNotification(i%5Bt%5D)%7D)%2C15e3)%7D%7Dclass%20i%7Bconstructor()%7Bconsole.debug(%22Skill%20Counter%20created.%22)%7Dasync%20clickButton(t)%7Bconst%20i%3D()%3D%3E%7Blet%20i%3Ddocument.querySelector(%60button%5Baria-label%3D%22%24%7Bt%7D%22%5D%2C%20button%5Bdata-test%3D%22%24%7Bt%7D%22%5D%60)%3Breturn%20i%7C%7C(i%3DArray.from(document.getElementsByTagName(%22button%22)).find((i%3D%3Ei.textContent.trim()%3D%3D%3Dt)))%2Ci%7D%3B(await(async()%3D%3E%7Blet%20t%3Di()%3Bfor(%3B!t%3B)await%20new%20Promise((t%3D%3EsetTimeout(t%2C500)))%2Ct%3Di()%3Breturn%20t%7D)()).click()%7Dasync%20countAllSkills()%7Bawait%20this.waitForSkillList()%3Bconst%20t%3Ddocument.querySelector(%22.job-details-skill-match-status-list%22).children%2Ci%3D%7B%7D%3Bconsole.debug(%22Skill%20List%3A%20%22%2Ct)%3Bfor(let%20o%3D0%3Bo%3Ct.length%3Bo%2B%2B)%7Bconst%20e%3Dt%5Bo%5D.querySelector(%22div%5Baria-label%5D%22)%3Bif(null%3D%3D%3De)throw%20new%20Error(%22Could%20not%20find%20the%20skill%20div.%22)%3Bconst%20n%3De.textContent%3F.trim()%3F%3F%22%22%3Bi%5Bn%5D%3Di%5Bn%5D%3Fi%5Bn%5D%2B1%3A1%7Dreturn%20i%7DsaveSkillCountResult(t)%7Blet%20i%3DlocalStorage.getItem(%22skills%22)%2Co%3D%7B%7D%3Bi%26%26(o%3DJSON.parse(i))%2Cconsole.debug(%22Current%20Skills%3A%20%22%2Ct)%2Cconsole.debug(%22Stored%20Skills%3A%20%22%2Co)%3Bfor(const%20i%20in%20t)o.hasOwnProperty(i)%3Fo%5Bi%5D%2B%3Dt%5Bi%5D%3Ao%5Bi%5D%3Dt%5Bi%5D%3BlocalStorage.setItem(%22skills%22%2CJSON.stringify(o))%2Cthis.printSkillCountTable()%7DprintSkillCountTable()%7Bconst%20t%3Dthis.getStoredSkills()%3Bt%3Fconsole.table(t)%3Aconsole.log(%22No%20skill%20count%20data%20found%20in%20local%20storage.%22)%7Dasync%20waitForSkillList()%7Blet%20t%3Ddocument.querySelector(%22.job-details-skill-match-status-list%22)%3Bfor(%3B!t%3B)await%20new%20Promise((t%3D%3EsetTimeout(t%2C500)))%2Ct%3Ddocument.querySelector(%22.job-details-skill-match-status-list%22)%2Cconsole.debug(%22Skill%20List%20Found%3A%20%22%2Ct)%3Bfor(%3B0%3D%3D%3Dt.children.length%3B)await%20new%20Promise((t%3D%3EsetTimeout(t%2C500)))%3Breturn%20console.debug(%22Skill%20List%20Has%20Children%3A%20%22%2Ct)%2CPromise.resolve()%7DgetStoredSkills()%7Bconst%20t%3DlocalStorage.getItem(%22skills%22)%3F%3F%22%7B%7D%22%3Breturn%20JSON.parse(t)%7DskillsChanged(t)%7Bconst%20i%3Dthis.getStoredSkills()%3Bif(!i)return!0%3Bfor(const%20o%20in%20t)%7Bif(!i.hasOwnProperty(o))return!0%3Bif(i%5Bo%5D!%3D%3Dt%5Bo%5D)return!0%7Dreturn!1%7D%7D(async()%3D%3E%7Bconst%20o%3Dnew%20t%2Ce%3Dnew%20i%2Cn%3Do.addNotification(%22Recording%20required%20skills...%22%2C%22info%22%2C9e9)%3Bawait%20e.clickButton(%22Show%20all%20skills%22)%3Bconst%20s%3Dawait%20e.countAllSkills()%2Cl%3De.getStoredSkills()%3Be.saveSkillCountResult(s)%2Cawait%20e.clickButton(%22Dismiss%22)%2Cn.parentElement%26%26o.closeNotification(n)%2Ce.skillsChanged(l)%3Fo.addNotification(%22Succesfully%20recorded%20required%20skills!%22%2C%22success%22)%3Ao.addNotification(%22There%20was%20an%20error%2C%20skills%20may%20be%20corrupt%20or%20you%20clicked%20too%20fast.%22%2C%22error%22%2C8e3)%7D)()%7D()%7D)()
 
```

## File Structure

The relevant files for the StartOut bookmarklet are:
- dist/bookmarklet.js: the compiled JavaScript file for the bookmarklet. We recommend using [this bookmarklet generator](https://mrcoles.com/bookmarklet/) to convert the JS to a bookmarklet, or you can paste and run the code in your browser's dev console.
- src/main.ts: the main TypeScript file for the bookmarklet, where you can find the implementation of the features

Here's a tree view:
```diff
+ ├─┬ dist/
! │ └── bookmarklet.js              × Compiled bookmarklet code
+ ├─┬ img/                      
  │ ├── StartOutDark.png            × StartOut logo (dark mode)
  │ └── StartOutLight.png           × StartOut logo (light mode)
+ ├─┬ src/                      
+ │ ├─┬ jobs/                   
  │ │ └── skill-counter.ts              × TypeScript code for tracking job skills
+ │ ├─┬ notifications/          
  │ │ ├── notification.css              × CSS styles for notifications
  │ │ └── notification.ts               × TypeScript code for displaying notifications
! │ └── main.ts                         × Entry point for the bookmarklet
  ├── package.json              × Package information and dependencies
  ├── tsconfig.json             × TypeScript configuration file
  ├── rollup.config.js          × Configuration for Rollup bundler
  ├── .gitignore                × Files and directories to ignore in Git
- ├── LICENSE                   × Super duper important license information
- └── README.md                 × Documentation for StartOut
```

## Contributing

I welcome contributions to the StartOut project! To contribute, please follow these steps:

1. Fork the repository and clone it to your local machine.

2. Install the dependencies by running `npm i` / `npm install`.

3. Make your changes and test them using `npm run dev`.

4. Build the bookmarklet by running `npm run build`.

5. Test the bookmarklet by dragging the dist/bookmarklet.js file to your browser's bookmark bar and clicking it on the LinkedIn site. (Only works on the jobs section for now)

6. Submit a pull request with your changes.

## License

StartOut is licensed under the GPL-3.0 License. By using StartOut, you agree to the terms of this license.
