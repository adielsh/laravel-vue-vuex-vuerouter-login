/**
 * Created by elad on 20 נובמבר 2016.
 */
    import BaseService from "../../services/BaseService";
import UserService from "../../services/UserService";
import r from "../../router"

 const types = {
	FETCH: "user/fetch",
	GET: "user/get",
	REMOVE: "user/remove",
	SAVE: "user/save",
	LOGIN: "user/login",
	LOGOUT: "user/logout",
	GETCONNECT: "user/getConnect",

}

 const userTempalte = {
	id: null,
}
 const state=  {
    users: [],
        nowUser: {}
}



const mutations = {
		[types.FETCH] (state,users) {
			state.users = users;
		},
		[types.GET] (state, user) {
			state.user = user;
		},
		[types.REMOVE] (state, user) {
		},
	[types.LOGIN] (state, user) {
		    console.log(user)
		    state.nowUser = user
		},
        [types.LOGOUT] (state) {
		    state.nowUser =  null
		},
        [types.GETCONNECT] (state, data) {
            state.nowUser = data

        },



        [types.SAVE](context, user){
            // if (state.users.indexOf(user) < 0) {
                // console.log("commit saeeeeeeve", user)
                // state.users.push(user);
            r.push('/')
            }
        // },
	}

	const actions = {
		[types.FETCH](context){
		},
		[types.GET](context, id){
		},
		[types.SAVE](context, user){
		},
		[types.REMOVE](context, user){
		},

        [types.LOGIN](context, user){
            let service = new UserService;
            console.log(user)
            return service.login(user).then(
                (response)=> {
                    if (response.data.id) {
                        context.commit(types.LOGIN, response.data);
                        r.push('main')
                    }
                });
		},
        [types.LOGOUT](context, user){
            let service = new UserService;
            return service.logout()
                .then(
                    data => {
                        r.push('/')

                        context.commit(types.LOGOUT);
                    }
                );
        },
        [types.GETCONNECT](context){
            let service = new UserService;

            return service.getConnectUser()
                .then(
                    data => {
                        console.log(data, "data on GETCONNECT")
                        context.commit(types.GETCONNECT, data);
                    }
                );
        },


        [types.SAVE](context, user){
            console.log("on save", user)

            context.state.nowUser = user

            let service = new UserService;
            if (!context.state.nowUser.id) {

                return service.register(context.state.nowUser).then(
                    (response)=> {
                        if (response) {
                            context.commit(types.SAVE, response);
                        }
                    });
            }
            else {

                // let ob ={id : context.state.nowTherapist.id}
                //     console.log("on update in action", ob)
                return service.update(context.state.nowTherapist, context.state.nowTherapist.id).then(
                    (response)=> {
                        if (response) {
                            context.commit(types.EDIT, response);
                        }
                        return response;
                    });
            }
        },
	}
export default
{
    state,
    // getters,
    actions,
    mutations,
    types,

}
