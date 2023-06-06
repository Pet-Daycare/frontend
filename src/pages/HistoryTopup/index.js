function HistoryTopUp() {
  const [historyTopUp, setHistoryTopUp] = useState();

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    console.log(username);
    console.log(token);

    const history = async () => {
      let response = await axios
        // .get("http://localhost:8081/api/customer/detail", {
        .get("http://34.172.96.175/api/customer/detail", {
          params: {
            username: username,
            token: token,
          },
        })
        .then((res) => console.log("PASS"))
        .catch((err) => alert(err));
    };
    history();
  }, []);

  return (
    <div className="history-tp-pg row">
      <div className="col-3">
        <NavigationCustomer />
      </div>
      <div className="col-9 main">
        <h2>History Top Up</h2>
        <div className="mt-3">
          <div className="row">
            <p className="col-2">ID</p>
            <p className="col-2">Tanggal TopUp</p>
            <p className="col-2">Metode TopUp</p>
            <p className="col-2">Jumlah TopUp</p>
            <p className="col-2">Jumlah Diterima</p>
            <p className="col-2">status</p>
          </div>
          <hr />
          {/* INI LOOP */}
          {/* {historyTopUp.map((result) => {<div>
                    <div className="row mt-2">
                        <p className="col-2 mb-0">sada</p>
                        <p className="col-2 mb-0"> asdasd</p>
                        <p className="col-2 mb-0">asdsada</p>
                        <p className="col-2 mb-0"> asd</p>
                        <p className="col-2 mb-0">+13.000</p>
                        <p className="col-2 mb-0">Success</p>
                    </div>
                    <hr/>
                </div> */}
          <div>
            <div className="row mt-2">
              <p className="col-2 mb-0">sada</p>
              <p className="col-2 mb-0"> asdasd</p>
              <p className="col-2 mb-0">asdsada</p>
              <p className="col-2 mb-0"> asd</p>
              <p className="col-2 mb-0">+13.000</p>
              <p className="col-2 mb-0">Success</p>
            </div>
            <hr />
          </div>
          <p>{historyTopUp}</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryTopUp;
