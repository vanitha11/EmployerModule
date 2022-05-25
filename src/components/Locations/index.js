import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { FiTrash2 } from 'react-icons/fi'
import { FiEdit } from 'react-icons/fi'
import { FiEye } from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import Footer from "../common/Footer";
import {getLocationList} from "./action";
import {locationsSelector} from "./selector";
import { Modal, Button } from "react-bootstrap";
import './location.css';

export default () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const {locationList} = useSelector(locationsSelector);
    useEffect(() => {
        console.log(locationList);
      }, [locationList]);


    useEffect(() => {
        dispatch(getLocationList());
      }, []);

      const showModal = () => {
        setShow(true);
      }
      const handleClose = () => setShow(false);

    return(
        <div className="page">
            <div className="page-main">
                <div className="main-content app-content mt-0 main-background">
                    <div className="side-app">
                        <div className="main-container container-fluid">
                            <div className="page-header">
                                <h1 className="page-title">Locations</h1>
                                <div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Locations</li>
                                </ol>
                            </div>
                            </div>
                            <div className="row">
                                <div class="col-xl-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <div id="myTable_wrapper" class="dataTables_wrapper no-footer">
                                                    <div class="dataTables_length" id="myTable_length"><label>Show <select name="myTable_length" aria-controls="myTable" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div>
                                                    <div id="myTable_filter" class="dataTables_filter">
                                                    <label>
                                                        Search:
                                                        <input class="form-control" placeholder="Search for results..." type="search" aria-controls="myTable" />
                                                        <button class="btn px-0 pt-2"><i class="fe fe-search" aria-hidden="true"></i></button>
                                                    </label>
                                                    </div>
                                                    <table id="myTable" class="display table dataTable no-footer" width="100%" role="grid" aria-describedby="myTable_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th class="sorting_asc" >Location Name</th>
                                                                <th class="sorting" >Address</th>
                                                                <th class="sorting" >Phone</th>
                                                                <th class="sorting">Travel distance</th>
                                                                <th name="bstable-actions" class="sortingWithoutIcon">View Contact</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" class="odd">
                                                                <td>Florida University Hospital</td>
                                                                <td>9876 University Blvd S, Jacksonville, FL 32216</td>
                                                                <td>111-111-1111</td>
                                                                <td>11 - 20 Miles</td>
                                                                <td name="bstable-actions">
                                                                    <div class="btn-list">
                                                                        <button id="bAcep" type="button" class="btn  btn-sm" onClick={showModal} title="View Contacts" style={{"font-size": "1.2rem"}}>
                                                                        <FiEye />
                                                                        </button>
                                                                        <button id="bEdit" type="button" class="btn btn-sm" title="Edit" style={{"font-size": "1.2rem"}}>
                                                                        <FiEdit />
                                                                        </button>
                                                                        <button id="bDel" type="button" class="btn  btn-sm" title="Delete" style={{"font-size": "1.2rem"}}>
                                                                           <FiTrash2 />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="dataTables_info" id="myTable_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div>
                                                    <div class="dataTables_paginate paging_simple_numbers" id="myTable_paginate">
                                                        <a class="paginate_button previous disabled" aria-controls="myTable" data-dt-idx="0" tabindex="0" id="myTable_previous">Previous</a>
                                                        <span>
                                                            <a class="paginate_button current" aria-controls="myTable" data-dt-idx="1" tabindex="0">1</a>
                                                            <a class="paginate_button current" aria-controls="myTable" data-dt-idx="1" tabindex="0">2</a>
                                                            <a class="paginate_button current" aria-controls="myTable" data-dt-idx="1" tabindex="0">3</a>
                                                        </span>
                                                        <a class="paginate_button next disabled" aria-controls="myTable" data-dt-idx="2" tabindex="0" id="myTable_next">Next</a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* Modal Component */}
                        <Modal size="xl" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contacts</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div class="panel panel-primary">
                                    <div class="tab-menu-heading tab-menu-heading-boxed">
                                        <div class="tabs-menu-boxed">
                                            <ul class="nav panel-tabs">
                                                <li><a href="#tab25" class="active" data-bs-toggle="tab">Contact List</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="panel-body tabs-menu-body">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tab25">
                                                        <div class="col-xl-14">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="table-responsive">
                                                                                <table class="table border text-nowrap text-md-nowrap table-hover mb-0">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>S.No</th>

                                                                                            <th>Name</th>
                                                                                            <th>Employee ID</th>
                                                                                            <th>Cell Phone #</th>
                                                                                            <th>Work Phone #</th>
                                                                                            <th>Email address</th>
                                                                                            <th name="bstable-actions">Actions</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>1</td>

                                                                                            <td>Name 1</td>
                                                                                            <td>Employee ID 1</td>
                                                                                            <td>111-111-1111</td>
                                                                                            <td>111-111-1111</td>
                                                                                            <td>Emailaddress1@mail.com</td>
                                                                                            <td name="bstable-actions">
                                                                                                <div class="btn-list">
                                                                                                    <button id="bEdit" type="button" class="btn btn-sm" title="Edit">
                                                                                                        <span class="fe fe-edit fa-lg"> </span>
                                                                                                    </button>
                                                                                                    <button id="bDel" type="button" class="btn  btn-sm" title="Delete">
                                                                                                        <span class="fe fe-trash-2 fa-lg"> </span>
                                                                                                    </button>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                           
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
