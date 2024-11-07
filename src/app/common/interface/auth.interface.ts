export interface LoginClient {
    LoginClient: {
        token: string;
        user:  User;
    }
}

export interface User {
    id:             string;
    user_id:        number;
    name:           string;
    last_name:      string;
    email:          string;
    phone:          string;
    roles:          string[];
    gender:         string;
    current_client: CurrentClient;
    deleted_at:     null;
    last_login:     Date;
    updated_at:     Date;
    created_at:     Date;
}

export interface CurrentClient {
    mongo_id:  string;
    client_id: number;
}

export interface LoginClientInput {
    loginClientInput: {
        email?:    string;
        phone?:    string;
        password: string;
    }
}