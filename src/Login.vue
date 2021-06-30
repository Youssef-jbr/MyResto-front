<template>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab"  class="sign-in" checked /><label
        for="tab-1"
        class="tab"
        >Connexion</label
      >
      <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
        for="tab-2"
        class="tab"
        >Inscription</label
      >
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">Adresse e-mail</label>
            <input
              id="user"
              :class="validation"
              v-model="formLogin.email"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Mot de passe</label>
            <input
              id="pass"
              :class="validation"
              v-model="formLogin.password"
              type="password"
              class="input"
              data-type="password"
            />
          </div>
          <div class="group">
            <input type="submit" class="button"  @click="submit()" value="Connexion" />
          </div>
        </div>
        <div class="sign-up-htm">
          <div class="group">
            <label for="user" class="label">Nom</label>
            <input
              id="user"
              v-model="formRegister.nom"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="user" class="label">Prénom</label>
            <input
              id="user"
              v-model="formRegister.prenom"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="user" class="label">Adresse e-mail</label>
            <input
              id="user"
              v-model="formRegister.email"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Mot de passe</label>
            <input
              id="pass"
              v-model="formRegister.password"
              type="password"
              class="input"
              data-type="password"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Confirmez le mot de passe</label>
            <input
              id="pass"
              v-model="formRegister.confirmPassword"
              type="password"
              class="input"
              data-type="password"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Adresse</label>
            <input
              id="pass"
              v-model="formRegister.adresse"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Code postal</label>
            <input
              id="pass"
              v-model="formRegister.codePostal"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <label for="pass" class="label">Ville</label>
            <input
              id="pass"
              v-model="formRegister.ville"
              type="text"
              class="input"
            />
          </div>
          <div class="group">
            <input type="submit" class="button" value="inscription" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
      formRegister: {
        nom: "",
        prenom: "",
        email: "",
        password: "",
        confirmPassword: "",
        adresse: "",
        codePostal: "",
        ville: "",
      },
      error: false,
      msgError: "",
      validation: "",
      requiredRules: [(v) => !!v || "Le champ est obligatoire"],
      passwordConfirm: [
        (v) => this.validate(v) || "Les mot de passes ne concorde pas !",
      ],
    };
  },
  watch: {
    email(val) {
      this.validation = "";
      this.error = false;
    },
    password(val) {
      this.validation = "";
      this.error = false;
    },
  },
  computed: {
    email() {
      return this.formLogin.email;
    },
    password() {
      return this.formLogin.password;
    },
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    submit() {
      this.login(this.formLogin).then((response) => {
        if (response) {
          if (response.data.code == 498) {
            this.error = true;
            this.msgError = response.data.message;
            this.validation = "is-invalid";
          }
        } else {
          this.$router.push("/carte").then(() => document.location.reload());
        }
      });
    },
    validate() {
      if (this.formRegister.password === this.formRegister.confirmPassword) {
        return true;
      } else {
        return false;
      }
    },
    register() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  color: #6a6f8c;
  background: #972d07;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 1000px;
  position: relative;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>