import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Category from "./components/Category";
import Item from "./components/Item";
import Gallery from "./components/Gallery";
import Login from "./pages/Login";
import { UserContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavBar />
      <main>
        <Switch>
          
          <Route path="/home">
            <Home user={user} />
          </Route>
          <Route path="/services">
            <Category />
          </Route>
          <Route path="/categories/:categoryId/items">
            <Item />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </main>
    </UserContext.Provider>
  );
}

export default App;
