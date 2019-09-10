import React, { Component } from 'react';

export default class Admins extends Component {
    render() {
        return (
            <div class="jumbotron vertical-center">
                <div className="container-fluid">
                    <form action="">
                        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                            <div class="input-group">
                                <input type="search" placeholder="Search swing dance venues and events" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                <div class="input-group-append">
                                    <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}