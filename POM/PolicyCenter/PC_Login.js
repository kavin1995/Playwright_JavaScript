exports.PC_Login = 
class PC_Login{

    constructor(page){
        this.page = page;
        this.userName='#Login\\:LoginScreen\\:LoginDV\\:username-inputEl';
        this.password='#Login\\:LoginScreen\\:LoginDV\\:password-inputEl';
        this.loginBtn='#Login\\:LoginScreen\\:LoginDV\\:submit-btnInnerEl';
    }

    async lunchURL(URL){
     //   await this.page.goto('http://192.168.99.145:8180/pc/PolicyCenter.do');
        await this.page.goto(URL);
    }

    async login(username,password){
        await this.page.locator(this.userName).fill(username);       
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}