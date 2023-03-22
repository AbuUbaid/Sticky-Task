<template>
  <div class="global-form" id="contact-form">
    <div class="background"></div>
    <div class="form-parent home-container">
      <div class="form-container">
      <h2>Let's Get Started</h2>
            
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
  <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads5666867000000732007 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5666867000000732007()' accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='83b0d711022caae66bd1d22ffb265a0813ad5d65632006f83c3c16e37766bdb9'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
 <input type='text' style='display:none;' name='xmIwtLD' value='31df86b79df9162e83ac89da5ca807f7ee555de13b9464e3c8dd7315a8c64bfc'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;siliconnet.com&#x2f;' > </input>
	 <!-- Do not remove this code. -->
	 <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
	 <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
	 <!-- Do not remove this code. -->
<!-- <div class='zcwf_title' style='max-width: 600px;color: black;'>Contact Us ATS</div> -->
<div class='zcwf_row'><div class='zcwf_col_lab' ><label for='LEADCF1'>How can we help you?<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><select class='zcwf_col_fld_slt' id='LEADCF1' name='LEADCF1'  >
			<option value='-None-'></option>
			<option value='Mobile&#x20;App&#x20;Development'>Mobile App Development</option>
			<option value='Enterprise&#x20;Software&#x20;Development'>Enterprise Software Development</option>
			<option value='Web&#x20;Development'>Web Development</option>
			<option value='Dedicated&#x20;Teams'>Dedicated Teams</option>
			<option value='IT&#x20;Consulting'>IT Consulting</option>
			<option value='Internet&#x20;of&#x20;Things'>Internet of Things</option>
			<option value='Blockchain'>Blockchain</option>
			<option value='Augmented&#x20;Reality'>Augmented Reality</option>
			<option value='Artificial&#x20;Intelligence'>Artificial Intelligence</option>
			<option value='Cloud&#x20;Computing'>Cloud Computing</option>
			<option value='FinTech'>FinTech</option>
			<option value='Other'>Other</option>
		</select><div class='zcwf_col_help'></div></div></div>
    <div class="first-rwo">
      <div class='zcwf_row'><div class='zcwf_col_lab' ><label for='Last_Name'>Name<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div>
      <div class='zcwf_row'><div class='zcwf_col_lab' ><label for='Email'>Email<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div class='zcwf_col_help'></div></div></div>
    </div>
    <div class="first-rwo">
      <div class='zcwf_row'><div class='zcwf_col_lab' ><label for='Phone'>Phone</label></div><div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone' maxlength='30'></input><div class='zcwf_col_help'></div></div></div>
      <div class='zcwf_row'><div class='zcwf_col_lab' ><label for='LEADCF5'>Organization</label></div><div class='zcwf_col_fld'><input type='text' id='LEADCF5' name='LEADCF5' maxlength='255'></input><div class='zcwf_col_help'></div></div></div>
    </div>
<div class='zcwf_row'><div class='zcwf_col_lab' ><label for='Description'>Message</label></div><div class='zcwf_col_fld'><textarea id='Description' name='Description'></textarea><div class='zcwf_col_help'></div></div></div>
<div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'><input type='reset' class='zcwf_button' name='reset' value='Reset' title='Reset'></div></div>
	</form>
</div>
      </div>
      <div class="badges-container">
        <img src="~/assets/images/sf-clutch--black.svg" alt="Clutch" />
        <img src="~/assets/images/el-goodfirms.svg" alt="Good firms" />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
	function validateEmail5666867000000732007()
	{
		var form = document.forms['WebToLeads5666867000000732007'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

 	  function checkMandatory5666867000000732007() {
		var mndFileds = new Array('Last Name');
		var fldLangVal = new Array('Last\x20Name');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads5666867000000732007'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		trackVisitor5666867000000732007();
		if(!validateEmail5666867000000732007()){return false;}
		document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

function tooltipShow5666867000000732007(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
</script>
<script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'738cfd870777f809baa64c9149c46ae907c4701df07d176a80adba46865c6d8e8bc5c201f0e5d1a9486f9dbf87f44a7d', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.com/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor5666867000000732007(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads5666867000000732007']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads5666867000000732007']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads5666867000000732007']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
	<!-- Do not remove this --- Analytics Tracking code starts -->
  <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=31df86b79df9162e83ac89da5ca807f7ee555de13b9464e3c8dd7315a8c64bfcgid83b0d711022caae66bd1d22ffb265a0813ad5d65632006f83c3c16e37766bdb9gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a'></script>
  <!-- Do not remove this --- Analytics Tracking code ends. -->
<script>
import axios from "axios";
export default {
  name: "GlobalForm",
  data() {
    return {
      loading: false,
      valid: true,
      success: false,
      zoho:'',
      formData: {
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
        select: null,
      },
      items: [
        "Mobile App Development",
        "Enterprise Software Development",
        "Web Development",
        "Dedicated Teams",
        "IT Consulting",
        "Internet of Things",
        "Blockchain",
        "Augmented Reality",
        "Artificial Intelligence",
        "Cloud Computing",
        "FinTech",
        "Other",
      ],
      nameRules: [(v) => !!v || "First name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    checkFields(e) {
      if (this.$refs.form.validate()) {
        //console.log(this.formData);
        this.loading = true;
        axios
          .post("https://formspree.io/f/xlevkodl", this.formData)
          .then((res) => {
            if (res.status == 200) {
              this.success = true;
              this.formData = {
                name: "",
                organization: "",
                email: "",
                phone: "",
                message: "",
                select: null,
              };
              this.loading = false;
            }
          });
        e.preventDefault();
      } else {
        return false;
      }
    },

},
};
</script>

<style lang="scss" scoped>
.successt {
  color: #e38601;
  font-family: "Gilroy-Medium";
  font-weight: 500;
  margin-top: 30px;
}
.global-form {
  margin-bottom: 50px;
  .background {
    background-color: #eef5ff;
    width: 100%;
    height: 450px;
    margin-bottom: -350px;
  }

  .form-parent {
    position: relative;
    background-color: white;
    box-shadow: 0px 12px 23px #00000017;
    z-index: 2;
    padding: 50px;
    margin: 0 200px;
    display: flex;
    gap: 50px;
    .form-container {
      flex-basis: 80%;
      width: 80%;
      .m-btn {
        padding: 15px 40px;
        background-color: #ef861d;
        color: white;
        display: inline-block;
        text-decoration: none;
        transition: 0.2s ease;
        font-size: 18px;
        border-radius: 5px;
        margin-right: 15px;
        line-height: 1em;
        &:hover {
          background: black;
        }
      }
    }
    .badges-container {
      display: flex;
      flex-direction: column;
      flex-basis: 20%;
      width: 20%;
      justify-content: center;
      gap: 50px;
      .sales-team {
        p {
          font-size: 16px;
        }
        a {
          font-size: 16px;
          color: #ef861d;
        }

        .social-icons {
          margin-top: 10px;
          > a {
            margin-right: 10px;
            display: inline-block;
          }
        }
      }
    }
  }
}

.form-group {
  display: flex;
  div {
    width: 100%;
  }
  > div {
    margin-right: 20px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .global-form {
    margin-bottom: 50px;
    .background {
      background-color: #eef5ff;
      width: 100%;
      height: 250px;
      margin-bottom: -200px;
    }

    .form-parent {
      padding: 20px;
      margin: 0px;
      flex-wrap: wrap;
      gap: 30px;
      .form-container {
        flex-basis: 100%;
        width: 100%;
        text-align: center;
      }
      .badges-container {
        flex-basis: 100%;
        width: 100%;
        gap: 30px;
        align-items: center;
        > img {
          width: 50%;
        }
      }
    }
  }
}
html,body{
	margin: 0px;
}
.first-rwo{
  display: flex;
  justify-content: space-between;
}
#crmWebToEntityForm.zcwf_lblLeft {
	width:100%;
	padding: 2px;
	margin: 4px 0;
	box-sizing: border-box;
}
#crmWebToEntityForm.zcwf_lblLeft * {
	box-sizing: border-box;
}
#crmWebToEntityForm{text-align: left;}
#crmWebToEntityForm * {
	direction: ltr;
}
.zcwf_lblLeft .zcwf_title {
	word-wrap: break-word;
	padding: 0px 6px 10px;
	font-weight: bold;
}
.zcwf_lblLeft .zcwf_col_fld input[type=text], .zcwf_lblLeft .zcwf_col_fld textarea {
	border-bottom: 1px solid #c0c6cc !important;
  resize: vertical;
  float: left;
  line-height: 20px;
  max-width: 100%;
  min-width: 0;
  padding: 8px 0;
  width: 100%;
  border-style: none;
}
.zcwf_lblLeft .zcwf_col_lab {
	width: 100%;
	word-break: break-word;
	padding: 0px 6px 0px;
	margin-right: 10px;
	margin-top: 5px;
	float: left;
	min-height: 1px;
}
.zcwf_lblLeft .zcwf_col_fld {
	float: left;
	width: 100%;
	padding: 0px 6px 0px;
	position: relative;
	margin-top: 5px;
}
.zcwf_lblLeft .zcwf_privacy{padding: 6px;}
.zcwf_lblLeft .wfrm_fld_dpNn{display: none;}
.dIB{display: inline-block;}
.zcwf_lblLeft .zcwf_col_fld_slt {
	border-bottom: 1px solid #c0c6cc !important;
  resize: vertical;
  float: left;
  line-height: 20px;
  max-width: 100%;
  min-width: 0;
  padding: 8px 0;
  width: 100%;
  border-style: none;
}
.zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after {
	content: '';
	display: table;
	clear: both;
}
.zcwf_lblLeft .zcwf_col_help {
	float: left;
	margin-left: 7px;
	font-size: 12px;
	max-width: 35%;
	word-break: break-word;
}
.zcwf_lblLeft .zcwf_help_icon {
	cursor: pointer;
	width: 16px;
	height: 16px;
	display: inline-block;
	background: #fff;
	border: 1px solid #c0c6cc;
	color: #c1c1c1;
	text-align: center;
	font-size: 11px;
	line-height: 16px;
	font-weight: bold;
	border-radius: 50%;
}
.zcwf_lblLeft .zcwf_row {margin: 15px 0px;}
.zcwf_lblLeft .formsubmit {
	margin-right: 5px;
	cursor: pointer;
	color: var(--baseColor);
	font-size: 12px;
}
.zcwf_lblLeft .zcwf_privacy_txt {
	width: 90%;
	color: rgb(0, 0, 0);
	font-size: 12px;
	font-family: Arial;
	display: inline-block;
	vertical-align: top;
	color: var(--baseColor);
	padding-top: 2px;
	margin-left: 6px;
}
.zcwf_lblLeft .zcwf_button {
	background-color: #ef861d;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  line-height: 1em;
  margin-right: 15px;
  padding: 15px 40px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: .2s ease;
	max-width: 230px;
}
.zcwf_lblLeft .zcwf_button:hover{
  background-color: #000;
}
.zcwf_lblLeft .zcwf_tooltip_over{
	position: relative;
}
.zcwf_lblLeft .zcwf_tooltip_ctn{
	position: absolute;
	background: #dedede;
	padding: 3px 6px;
	top: 3px;
	border-radius: 4px;word-break: break-word;
	min-width: 100px;
	max-width: 150px;
	color: var(--baseColor);
	z-index: 100;
}
.zcwf_lblLeft .zcwf_ckbox{
	float: left;
}
.zcwf_lblLeft .zcwf_file{
	width: 55%;
	box-sizing: border-box;
	float: left;
}
.clearB:after{
	content:'';
	display: block;
	clear: both;
}
@media all and (max-width: 600px) {
	.zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld {
		width: auto;
		float: none !important;
	}
	.zcwf_lblLeft .zcwf_col_help {width: 40%;}
}
</style>