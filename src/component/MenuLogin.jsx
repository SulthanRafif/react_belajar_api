import React from 'react';
import './HelloComponent.css';
const Username = () => {
    return (
        <input type="text" class="form-control" id="colFormLabel" placeholder="Username" />
    );
}

const MenuLogin = () => {
    return (
        <div>
            <div className="text-center">
                <h1>
                    Sign In
                </h1>
            </div>
            <div class="container" id="LoginForm">
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8 border border-top">
                        <form>
                            <div className="text-center">
                                <div className="container">
                                    <div class="form-group row">
                                        <label for="colFormLabel" class="col-sm-2 col-form-label">Username</label>
                                        <div class="col-sm-10">
                                           {Username()}
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="colFormLabel" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="colFormLabel" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input type="checkbox" name="remember" className="ml-3" /> Remember me
                            </label>
                            <div className="text-center">
                                <div className="container">
                                    <button class="btn btn-success" type="submit">Login</button>
                                </div>
                                <div className="container">
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    <br />
                                    <span className="psw">Forgot <a href="#">password ?</a></span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
            </div>
        </div>
    );
}

// agar component ini dapat dipakai dimana saja
export default MenuLogin;