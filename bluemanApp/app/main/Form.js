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

createNewFormContactHtml = `<div class="test" >
    
<h2 class="form__title">CONTACT ME</h2>

<div class="form__field" id="firstName_anchor"><label for="firstName"><span class="field__label">First
            Name</span></label> <input type="text" required="required" data-text-only="False" id="firstName"
        name="firstName" autocomplete="" aria-required="True" placeholder=""
        data-error-message="{&quot;empty&quot;:&quot;First Name can't be empty&quot;,&quot;invalid&quot;:&quot;First Name is invalid&quot;}">
</div>
<div class="form__field" id="lastName_anchor"><label for="lastName"><span class="field__label">Last
            Name</span></label>
    <input type="text" required="required" data-text-only="False" id="lastName" name="lastName" autocomplete=""
        aria-required="True" placeholder=""
        data-error-message="{&quot;empty&quot;:&quot;Last Name can't be empty&quot;,&quot;invalid&quot;:&quot;Last Name is invalid&quot;}">
</div>
<div class="form__field" id="email_anchor"><label for="email"><span class="field__label">Email
            Address</span></label>
    <input type="email" id="email" name="email" required="required" autocomplete="" aria-required="True"
        data-error-message="{&quot;empty&quot;:&quot;Email can't be empty&quot;,&quot;invalid&quot;:&quot;Email is invalid&quot;}">
</div>
<div class="form__field" id="phoneNumber_anchor"><label for="phoneNumber"><span class="field__label">Phone Number
            (optional)</span> <span class="field__hint" style="display: inline-block;">With the format
            1234567890</span></label> <input type="tel" id="phoneNumber" name="phoneNumber" autocomplete="tel"
        aria-required="False"
        data-error-message="{&quot;empty&quot;:&quot;Phone Number can't be empty&quot;,&quot;invalid&quot;:&quot;Phone Number is invalid&quot;}">
</div>
<div class="form__field form__select"><label for="country"><span class="field__label">Country of
            Residence</span></label> <select id="country" required="required" name="country" aria-required="True"
        data-error-message="{&quot;empty&quot;:&quot;Country of Residence can't be empty&quot;,&quot;invalid&quot;:&quot;Country of Residence is invalid&quot;}"
        data-type="country">
        <option value="" disabled="disabled" selected="selected">--Choose a country--</option>
        <option value="CA">Canada</option>
        <option value="US">United States</option>
        <option value="AF">Afghanistan</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AS">American Samoa</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AQ">Antarctica</option>
        <option value="AG">Antigua and Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia, Plurinational State of</option>
        <option value="BA">Bosnia and Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BV">Bouvet Island</option>
        <option value="BR">Brazil</option>
        <option value="IO">British Indian Ocean Territory</option>
        <option value="BN">Brunei Darussalam</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="KH">Cambodia</option>
        <option value="CM">Cameroon</option>
        <option value="CV">Cape Verde</option>
        <option value="KY">Cayman Islands</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CX">Christmas Island</option>
        <option value="CC">Cocos (Keeling) Islands</option>
        <option value="CO">Colombia</option>
        <option value="KM">Comoros</option>
        <option value="CG">Congo</option>
        <option value="CD">Congo, the Democratic Republic of the</option>
        <option value="CK">Cook Islands</option>
        <option value="CR">Costa Rica</option>
        <option value="CI">Côte d'Ivoire</option>
        <option value="HR">Croatia</option>
        <option value="CU">Cuba</option>
        <option value="CW">Curaçao</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egypt</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="EE">Estonia</option>
        <option value="ET">Ethiopia</option>
        <option value="FK">Falkland Islands (Malvinas)</option>
        <option value="FO">Faroe Islands</option>
        <option value="FJ">Fiji</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="GF">French Guiana</option>
        <option value="PF">French Polynesia</option>
        <option value="TF">French Southern Territories</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="DE">Germany</option>
        <option value="GH">Ghana</option>
        <option value="GI">Gibraltar</option>
        <option value="GR">Greece</option>
        <option value="GL">Greenland</option>
        <option value="GD">Grenada</option>
        <option value="GP">Guadeloupe</option>
        <option value="GU">Guam</option>
        <option value="GT">Guatemala</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="GN">Guinea</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HM">Heard Island and McDonald Islands</option>
        <option value="VA">Holy See (Vatican City State)</option>
        <option value="HN">Honduras</option>
        <option value="HK">Hong Kong</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran, Islamic Republic of</option>
        <option value="IQ">Iraq</option>
        <option value="IE">Ireland</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KE">Kenya</option>
        <option value="KI">Kiribati</option>
        <option value="KP">Korea, Democratic People's Republic of</option>
        <option value="KR">Korea (Republic of)</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Lao People's Democratic Republic</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libya</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MO">Macao</option>
        <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
        <option value="MG">Madagascar</option>
        <option value="MW">Malawi</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MH">Marshall Islands</option>
        <option value="MQ">Martinique</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="YT">Mayotte</option>
        <option value="MX">Mexico</option>
        <option value="FM">Micronesia, Federated states of</option>
        <option value="MD">Moldova, Republic of</option>
        <option value="MC">Monaco</option>
        <option value="MN">Mongolia</option>
        <option value="MS">Montserrat</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar</option>
        <option value="NA">Namibia</option>
        <option value="NR">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="NL">Netherlands</option>
        <option value="NC">New Caledonia</option>
        <option value="NZ">New Zealand</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="NU">Niue</option>
        <option value="NF">Norfolk Island</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="NO">Norway</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PW">Palau</option>
        <option value="PS">Palestine, State of</option>
        <option value="PA">Panama</option>
        <option value="PG">Papua New Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PH">Philippines</option>
        <option value="PN">Pitcairn</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="PR">Puerto Rico</option>
        <option value="QA">Qatar</option>
        <option value="RE">Réunion</option>
        <option value="RO">Romania</option>
        <option value="RU">Russian Federation</option>
        <option value="RW">Rwanda</option>
        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
        <option value="KN">Saint Kitts and Nevis</option>
        <option value="LC">Saint Lucia</option>
        <option value="PM">Saint Pierre and Miquelon</option>
        <option value="VC">Saint Vincent and the Grenadines</option>
        <option value="WS">Samoa</option>
        <option value="SM">San Marino</option>
        <option value="ST">Sao Tome and Principe</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SN">Senegal</option>
        <option value="RS">Serbia</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SG">Singapore</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="SB">Solomon Islands</option>
        <option value="SO">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="GS">South Georgia and the South Sandwich Islands</option>
        <option value="ES">Spain</option>
        <option value="LK">Sri Lanka</option>
        <option value="SD">Sudan</option>
        <option value="SR">Suriname</option>
        <option value="SJ">Svalbard and Jan Mayen</option>
        <option value="SZ">Swaziland</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="SY">Syrian Arab Republic</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TZ">Tanzania, United Republic of</option>
        <option value="TH">Thailand</option>
        <option value="TP">Timor-Leste</option>
        <option value="TG">Togo</option>
        <option value="TK">Tokelau</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad and Tobago</option>
        <option value="TN">Tunisia</option>
        <option value="TR">Turkey</option>
        <option value="TM">Turkmenistan</option>
        <option value="TC">Turks and Caicos Islands</option>
        <option value="TV">Tuvalu</option>
        <option value="UG">Uganda</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="UM">United States Minor Outlying Islands</option>
        <option value="UY">Uruguay</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VU">Vanuatu</option>
        <option value="VE">Venezuela, Bolivarian Republic of</option>
        <option value="VN">Viet Nam</option>
        <option value="VG">Virgin Islands, British</option>
        <option value="VI">Virgin Islands, U.S.</option>
        <option value="WF">Wallis and Futuna</option>
        <option value="EH">Western Sahara</option>
        <option value="YE">Yemen</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
    </select></div>
<div class="form__field form__select" style="display: none;"><label for="subRegion"><span
            class="field__label">Region
            (optional)</span></label> <select id="subRegion" disabled="disabled" name="SubRegion"
        data-error-message="{&quot;empty&quot;:&quot;Country of Residence can't be empty&quot;,&quot;invalid&quot;:&quot;Country of Residence is invalid&quot;}"
        data-type="region">
        <option value="" disabled="disabled" selected="selected">--Choose a state--</option>
        <optgroup label="AU" hidden="hidden" data-label="State / Province"
            data-placeholder="Choose a State/Province">
            <option value="ACT">Australian Capital Territory</option>
            <option value="NSW">New South Wales</option>
            <option value="NT">Northern Territory</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="VIC">Victoria</option>
            <option value="WA">Western Australia</option>
        </optgroup>
        <optgroup label="CA" hidden="hidden" data-label="State / Province"
            data-placeholder="Choose a State/Province">
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NT">Northwest Territories</option>
            <option value="NS">Nova Scotia</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
        </optgroup>
        <optgroup label="CN" hidden="hidden" data-label="State / Province"
            data-placeholder="Choose a State/Province">
            <option value="CN-46">Hainan</option>
        </optgroup>
        <optgroup label="NZ" hidden="hidden" data-label="State / Province"
            data-placeholder="Choose a State/Province">
            <option value="NZ">NZ, To be deleted</option>
        </optgroup>
        <optgroup label="US" hidden="hidden" data-label="State / Province"
            data-placeholder="Choose a State/Province">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MP">Mariana Islands</option>
            <option value="MH">Marshall Islands</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="FM">Micronesia</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VI">Virgin Islands</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </optgroup>
    </select></div>
<div class="form__field" id="postalCode_anchor"><label for="postalCode"><span class="field__label">Zip / Postal
            Code</span></label> <input type="text" required="required" data-text-only="False" id="postalCode"
        name="postalCode" autocomplete="" aria-required="True" placeholder=""
        data-error-message="{&quot;empty&quot;:&quot;Zip/Postal code can't be empty&quot;,&quot;invalid&quot;:&quot;Zip/Postal Code is invalid&quot;}">
</div>
<div class="form__field form__select"><label for="topic"><span class="field__label">Topic (optional)</span></label>
    <select id="topic" name="topic" aria-required="False"
        data-error-message="{&quot;empty&quot;:&quot;Topic can't be empty&quot;,&quot;invalid&quot;:&quot;Topic is invalid&quot;}">
        <option value="" disabled="disabled" selected="selected">Select a topic</option>
        <option value="EN_TOPIC_Events">Events</option>
        <option value="EN_TOPIC_Email_Unsubscribe">Email Unsubscribe</option>
        <option value="EN_TOPIC_General">General</option>
        <option value="EN_TOPIC_Groups">Groups</option>
        <option value="EN_TOPIC_LostFound">Lost Found</option>
    </select>
</div>
<div class="form__field"><label for="message"><span class="field__label">Drop Us A Line</span> <span
            class="field__hint"></span></label> <textarea required="required" id="message" name="message" rows="4"
        aria-describedby="message" maxlength="2000" aria-required="True"
        data-error-message="{&quot;empty&quot;:&quot;Drop Us A Line can't be empty&quot;,&quot;invalid&quot;:&quot;Drop Us A Line is invalid&quot;}"></textarea>
</div>
<div data-no-optional-msg="true" class="form__field" id="optin_anchor">
    <legend><span class="field__label"></span></legend>
    <div class="field__checkbox"><input type="checkbox" id="optin" name="optin" value="true"> <span
            class="checkmark"></span> <label for="optin"><span>
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> or <a
                        href="/contact">contact us</a> for more details.
                </p>
            </span></label></div>
</div>
<div id="reCaptchaEA730Caa??" class="captcha__container">
    <div style="width: 304px; height: 78px;">
        <div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-sgcjc97ga7pa"
                frameborder="0" scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfK8VoUAAAAAOMkh_YxmhNmk3s2Lm0ijECU7Mxj&amp;co=aHR0cHM6Ly93d3cuYmx1ZW1hbi5jb206NDQz&amp;hl=en&amp;v=rz4DvU-cY2JYCwHSTck0_qm-&amp;size=normal&amp;cb=sje994kg6hwi"></iframe>
        </div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
            style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
    </div><iframe style="display: none;"></iframe>
</div>
<div class="captcha__message" style="display: none;">Please Validate reCaptcha </div> <button type="submit"
    value="Submit" class="cta +btn"><span>
        Submit
    </span></button>
</div>`

  formularioTest() {
    return this.formulario;
  }
  myAccount() {
    return this.myAccountHtml;
  }
  createNewAccount(){
    return this.createNewAccountHtml;
  }

  createNewFormContact(){
    return this.createNewFormContactHtml;
  }
}
