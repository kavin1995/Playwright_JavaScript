import { expect } from "@playwright/test";
exports.PolicyCancel =
class PolicyCancel {

    constructor(page){
	this.page = page;
    this.actions='#PolicyFile\\:PolicyFileMenuActions-btnInnerEl';
	this.cancel_Policy='#PolicyFile\\:PolicyFileMenuActions\\:PolicyFileMenuActions_NewWorkOrder\\:PolicyFileMenuActions_CancelPolicy-textEl';
	this.source='#StartCancellation\\:StartCancellationScreen\\:CancelPolicyDV\\:Source-inputEl';
	this.reason='[id="StartCancellation:StartCancellationScreen:CancelPolicyDV:Reason-inputEl"]';
	this.reason_Description='#StartCancellation\\:StartCancellationScreen\\:CancelPolicyDV\\:ReasonDescription-inputEl';
	this.refund_Method='#StartCancellation\\:StartCancellationScreen\\:CancelPolicyDV\\:CalcMethod-inputEl';
	this.start_CancellationBtn='#StartCancellation\\:StartCancellationScreen\\:NewCancellation-btnInnerEl';
	this.bind_Option='#CancellationWizard\\:CancellationWizard_QuoteScreen\\:JobWizardToolbarButtonSet\\:BindOptions-btnInnerEl';
	this.cancel_Now='#CancellationWizard\\:CancellationWizard_QuoteScreen\\:JobWizardToolbarButtonSet\\:BindOptions\\:CancelNow-textEl';
	this.warning_Message_Ok="//*[text()='OK']";
	this.tittle_Bar_Status='#JobComplete\\:JobCompleteScreen\\:ttlBar';
	this.view_Your_Policy='#JobComplete\\:JobCompleteScreen\\:JobCompleteDV\\:ViewPolicy-inputEl';
	this.policy_Number='#PolicyFile_Summary\\:Policy_SummaryScreen\\:Policy_Summary_PolicyDV\\:PolicyNumber-inputEl';
	this.policy_Transactions='#PolicyFile\\:MenuLinks\\:PolicyFile_PolicyFile_Jobs';
	this.policy_Current_Status="//div[@id='PolicyFile_Jobs/DetailsTitleCard']//table//table[1]//tr//td[5]//div";

    }

	async policyCalcel(){

		await this.page.locator(this.actions).click();
		await this.page.locator(this.cancel_Policy).click();
		await this.page.locator(this.source).fill('Insured');
		//await this.page.waitForTimeout(1000);
		await this.page.locator(this.reason).click();
		await this.page.locator(this.reason).press('Delete');
		//await this.page.waitForTimeout(1000);
		await this.page.locator(this.reason).click();
		await this.page.locator(this.reason).fill('Policy not-taken');
		await this.page.locator(this.reason).press('Enter');
		await this.page.locator(this.refund_Method).click();
		await this.page.locator(this.start_CancellationBtn).click();
		//await this.page.waitForTimeout(3000);
		await this.page.locator(this.bind_Option).click();
		await this.page.locator(this.cancel_Now).click();
		await this.page.locator(this.warning_Message_Ok).click();
		const tittleStatus = await this.page.locator(this.tittle_Bar_Status).textContent();
		console.log("Tranaction Status is "+ tittleStatus);
		await expect (this.page.locator(this.tittle_Bar_Status)).toContainText('Cancellation Bound');
		//await this.page.waitForTimeout(1000);
		await this.page.locator(this.view_Your_Policy).click();
		await this.page.screenshot({ path: 'Policy Cancel.png' });
		await this.page.locator(this.policy_Transactions).click();
		await expect (this.page.locator(this.policy_Current_Status)).toContainText('Canceled'); 

	}

}