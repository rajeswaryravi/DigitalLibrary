import React from "react";
import Home from "./home";
import AddBook from "./add-book";
import EmployeeList from "./employee-list";
import { Route, Switch } from "react-router-dom";
import EmployeeUpdateForm from "./employee-update-form";

export default function DigitalLibrary() {

  return (
    <div>
      <Home />
      <Switch>
        <Route exact path="/add">
          <AddBook />
        </Route>
        <Route path="/employees">
          <EmployeeList />
        </Route>
        <Route path="/:id">
          <EmployeeUpdateForm />
        </Route>
      </Switch>
    </div>
  );
}
