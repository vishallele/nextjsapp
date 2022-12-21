import User from "../../repositories/User/UserRepositories"

export default async function registration(req, res) {
  
  if( req.method === 'POST' ) {

    try {
      let UserData = await User.addUser(req.body);
      res.status(200).json({ name: UserData });
    } catch(error) {
      res.status(500).json({ err: error.message });
    }

  }

}
