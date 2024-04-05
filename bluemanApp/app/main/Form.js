import { BaseIndex } from "../base/BaseIndex.js";

export class Form extends BaseIndex {
  constructor(head, body, footer) {
    super(head, body, footer);
  }

  formulario = `
<div class="row">
    <div class="col-md-6" style="padding-left:5%; padding-right:5%;">
        <div id="customer-login" class="well">
            <p><strong>My Account</strong></p>
            <p>* indicates a required field</p>
            <form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" 
                data-login-with-shop-sign-in="true" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'customer_login'); return false;">
                <input type="hidden" name="form_type" value="customer_login">
                <input type="hidden" name="utf8" value="✓">
                <fieldset>
                    <legend class="sr-only">Sign In</legend>
                    <div class="form-group required">
                        <label class="control-label" for="input-email">E-Mail</label>
                        <input autocomplete="email" type="email" required="required" name="customer[email]" 
                            placeholder="E-Mail" id="input-email" class="form-control" style="width:100%;">
                    </div>
                    <div class="form-group required">
                        <label class="control-label" for="input-password">Password</label>
                        <input autocomplete="current-password" type="password" required="required" 
                            name="customer[password]" placeholder="Password" id="input-password" 
                            class="form-control" style="width:100%;">
                    </div>
                </fieldset>
                <div id="forgot_password">
                    <a href="#recover">Forgot your password?</a>
                </div>
                <input type="submit" value="Login" class="btn btn-primary" style="width:100%;">
                <input type="hidden" name="return_url" value="/account">
            </form>
        </div>
        <div id="recover-password" class="well" style="display:none;">
            <h2>Reset your password</h2>
            <p><strong>I forgot password</strong></p>
            <p>Enter the e-mail address associated with your account. Click submit to have your password e-mailed to
                you.</p>
            <form method="post" action="/account/recover" accept-charset="UTF-8" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'recover_customer_password'); return false;">
                <input type="hidden" name="form_type" value="recover_customer_password">
                <input type="hidden" name="utf8" value="✓">
                <div class="form-group required">
                    <label class="control-label" for="input-password">E-Mail</label>
                    <input autocomplete="email" type="email" required="required" name="email" id="recover-email" 
                        class="form-control">
                </div>
                <div class="action_bottom">
                    <input type="submit" value="Submit" class="btn btn-primary">
                    <span class="ml20"><a class="cancel" href="javascript:void(0);" target="_blank" 
                            rel="noreferrer noopener">Back</a></span>
                </div>
            </form>
        </div>
        <script></script>
    </div>
    <div class="col-md-6" style="padding-left:5%; padding-right:5%;">
        <div class="well" style="margin-bottom:100px !important;">
            <p><strong>Create a New Account</strong></p>
            <p>* indicates a required field</p>
            <form method="post" action="/account" id="create_customer" accept-charset="UTF-8" 
                data-login-with-shop-sign-up="true" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'create_customer'); return false;">
                <input type="hidden" name="form_type" value="create_customer">
                <input type="hidden" name="utf8" value="✓">
                <fieldset id="account" class="form-horizontal">
                    <legend class="sr-only">Register</legend>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-firstname">First Name</label>
                        <div class="col-sm-10">
                            <input autocomplete="given-name" type="text" name="customer[first_name]" 
                                placeholder="First Name" id="input-firstname" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-lastname">Last Name</label>
                        <div class="col-sm-10">
                            <input autocomplete="family-name" type="text" name="customer[last_name]" 
                                placeholder="Last Name" id="input-lastname" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">E-Mail</label>
                        <div class="col-sm-10">
                            <input autocomplete="email" type="email" required="required" name="customer[email]" 
                                value="" placeholder="E-Mail" id="input-email" class="form-control" 
                                style="width:100%;">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-password">Password</label>
                        <div class="col-sm-10">
                            <input autocomplete="new-password" type="password" required="required" 
                                name="customer[password]" placeholder="Password" id="input-password" 
                                class="form-control">
                        </div>
                    </div>
                </fieldset>
                <div class="buttons" style="float:left !important; width:100%;">
                    <div class="pull-right">
                        <input type="submit" value="Submit" class="btn btn-primary" style="width:100%;">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
`;

  myAccountHtml = `
    <div class="col-md-6" style="padding-left:5%; padding-right:5%;">
        <div id="customer-login" class="well">
            <p><strong>My Account</strong></p>
            <p>* indicates a required field</p>
            <form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" 
                data-login-with-shop-sign-in="true" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'customer_login'); return false;">
                <input type="hidden" name="form_type" value="customer_login">
                <input type="hidden" name="utf8" value="✓">
                <fieldset>
                    <legend class="sr-only">Sign In</legend>
                    <div class="form-group required">
                        <label class="control-label" for="input-email">E-Mail</label>
                        <input autocomplete="email" type="email" required="required" name="customer[email]" 
                            placeholder="E-Mail" id="input-email" class="form-control" style="width:100%;">
                    </div>
                    <div class="form-group required">
                        <label class="control-label" for="input-password">Password</label>
                        <input autocomplete="current-password" type="password" required="required" 
                            name="customer[password]" placeholder="Password" id="input-password" 
                            class="form-control" style="width:100%;">
                    </div>
                </fieldset>
                <div id="forgot_password">
                    <a href="#recover">Forgot your password?</a>
                </div>
                <input type="submit" value="Login" class="btn btn-primary" style="width:100%;">
                <input type="hidden" name="return_url" value="/account">
            </form>
        </div>
        <div id="recover-password" class="well" style="display:none;">
            <h2>Reset your password</h2>
            <p><strong>I forgot password</strong></p>
            <p>Enter the e-mail address associated with your account. Click submit to have your password e-mailed to
                you.</p>
            <form method="post" action="/account/recover" accept-charset="UTF-8" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'recover_customer_password'); return false;">
                <input type="hidden" name="form_type" value="recover_customer_password">
                <input type="hidden" name="utf8" value="✓">
                <div class="form-group required">
                    <label class="control-label" for="input-password">E-Mail</label>
                    <input autocomplete="email" type="email" required="required" name="email" id="recover-email" 
                        class="form-control">
                </div>
                <div class="action_bottom">
                    <input type="submit" value="Submit" class="btn btn-primary">
                    <span class="ml20"><a class="cancel" href="javascript:void(0);" target="_blank" 
                            rel="noreferrer noopener">Back</a></span>
                </div>
            </form>
        </div>
        <script></script>
    </div>`;

  createNewAccountHtml = `
    <div class="col-md-6" style="padding-left:5%; padding-right:5%;">
        <div class="well" style="margin-bottom:100px !important;">
            <p><strong>Create a New Account</strong></p>
            <p>* indicates a required field</p>
            <form method="post" action="/account" id="create_customer" accept-charset="UTF-8" 
                data-login-with-shop-sign-up="true" 
                onsubmit="window.Shopify.recaptchaV3.addToken(this, 'create_customer'); return false;">
                <input type="hidden" name="form_type" value="create_customer">
                <input type="hidden" name="utf8" value="✓">
                <fieldset id="account" class="form-horizontal">
                    <legend class="sr-only">Register</legend>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-firstname">First Name</label>
                        <div class="col-sm-10">
                            <input autocomplete="given-name" type="text" name="customer[first_name]" 
                                placeholder="First Name" id="input-firstname" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-lastname">Last Name</label>
                        <div class="col-sm-10">
                            <input autocomplete="family-name" type="text" name="customer[last_name]" 
                                placeholder="Last Name" id="input-lastname" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">E-Mail</label>
                        <div class="col-sm-10">
                            <input autocomplete="email" type="email" required="required" name="customer[email]" 
                                value="" placeholder="E-Mail" id="input-email" class="form-control" 
                                style="width:100%;">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-password">Password</label>
                        <div class="col-sm-10">
                            <input autocomplete="new-password" type="password" required="required" 
                                name="customer[password]" placeholder="Password" id="input-password" 
                                class="form-control">
                        </div>
                    </div>
                </fieldset>
                <div class="buttons" style="float:left !important; width:100%;">
                    <div class="pull-right">
                        <input type="submit" value="Submit" class="btn btn-primary" style="width:100%;">
                    </div>
                </div>
            </form>
        </div>
    </div>
`;

  formularioTest() {
    return this.formulario;
  }
  myAccount() {
    return this.myAccountHtml;
  }
  createNewAccount(){
    return this.createNewAccountHtml
  }
}
