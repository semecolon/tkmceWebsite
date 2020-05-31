// Animations init
new WOW().init();



function op1()
{
 login='<form class="text-center border border-light p-5" action="#!"><p class="h4 mb-4">Alumni Sign In</p><input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"><input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"><div class="d-flex justify-content-around"><div><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"><label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label></div></div><div><a href="">Forgot password?</a></div></div><button class="btn btn-info btn-block my-4" type="submit">Sign in</button></form>';

 document.getElementById('loginsignup').innerHTML=login;
}

function op2()
{
 signup='<form class="text-center border border-light p-5" action="#!"><p class="h4 mb-4">New Alumni Registration</p><div class="form-row mb-4"><div class="col"><input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"></div><div class="col"><input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"></div></div><input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"><input type="password" id="defaultRegisterFormPassword" class="form-control mb-4" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"><input type="text" id="defaultRegisterPhonePassword" class="form-control mb-4" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"><div class="input-group mb-3"><div class="input-group-prepend"><label class="input-group-text" for="inputGroupSelect01">Select Department</label></div><select class="browser-default custom-select" id="inputGroupSelect01"><option selected disabled>Choose...</option><option value="1">Mechanical</option><option value="2">Civil</option><option value="3">Electrical</option><option value="4">Electronics</option><option value="5">Computer Science</option><option value="6">Chemical</option><option value="7">Production</option><option value="8">Architecture</option></select></div><button class="btn btn-info my-4 btn-block" type="submit">Register</button><p>or sign up with:</p><a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a><a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a><a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a><a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a><hr><p>By clicking <em>Register</em> you agree to our <a href="" target="_blank">terms of service</a></form>';
 document.getElementById('loginsignup').innerHTML=signup;
}
