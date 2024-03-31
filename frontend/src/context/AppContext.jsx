import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();
import axios from "axios";
import { tsvParse } from "d3-dsv";

const initState = {
  isDataLoad: false,
  isMainContainer: "Reporter",
  dataSections: [],
  dataReporters: [],
  dataSectionsUpdates: [],
  dataReportersUpdates: [],
};

const AppContext = ({ children }) => {
  const [state, setState] = useState(initState);

  const [fetchReporters, setFetchReporters] = useState({
    done: false,
    isGet: false,
    data: [],
  });
  const [fetchReportersUpdates, setFetchReportersUpdates] = useState({
    done: false,
    isGet: false,
    data: [],
  });
  const [fetchSections, setFetchSections] = useState({
    done: false,
    isGet: false,
    data: [],
  });
  const [fetchSectionsUpdates, setFetchSectionsUpdates] = useState({
    done: false,
    isGet: false,
    data: [],
  });

  useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAl8EBV4nOwx7whZzcRY2Tr7PMHDw1WXCyE6tmgaMfvbpJK17SL8q1hDTHt2th87j_Ny4ldXOryR-E/pub?gid=1719472370&single=true&output=tsv"
      )
      .then((response) => {
        const parse = tsvParse(response.data);
        setFetchReporters({
          done: true,
          isGet: true,
          data: parse,
        });
      })
      .catch((error) => {
        console.error("Error", error);
        setFetchReporters({
          done: true,
          isGet: false,
          data: [],
        });
      });

    axios
      .get("https://storage.googleapis.com/vrw-dataset/reporters_updates.json")
      .then((response) => {
        setFetchReportersUpdates({
          done: true,
          isGet: true,
          data: response.data,
        });
      })
      .catch((error) => {
        console.error("Error", error);
        setFetchReportersUpdates({
          done: true,
          isGet: false,
          data: [],
        });
      });

    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAl8EBV4nOwx7whZzcRY2Tr7PMHDw1WXCyE6tmgaMfvbpJK17SL8q1hDTHt2th87j_Ny4ldXOryR-E/pub?gid=1982312246&single=true&output=tsv"
      )
      .then((response) => {
        const parse = tsvParse(response.data);
        setFetchSections({
          done: true,
          isGet: true,
          data: parse,
        });
      })
      .catch((error) => {
        console.error("Error", error);
        setFetchSections({
          done: true,
          isGet: false,
          data: [],
        });
      });

    axios
      .get("https://storage.googleapis.com/vrw-dataset/sections_updates.json")
      .then((response) => {
        setFetchSectionsUpdates({
          done: true,
          isGet: true,
          data: response.data,
        });
      })
      .catch((error) => {
        console.error("Error", error);
        setFetchSectionsUpdates({
          done: true,
          isGet: false,
          data: [],
        });
      });
  }, []);

  useEffect(() => {
    if (
      fetchReporters.done === true &&
      fetchReportersUpdates.done === true &&
      fetchSections.done === true &&
      fetchSectionsUpdates.done === true
    ) {
      setState({
        ...state,
        isDataLoad: true,
        dataReporters: fetchReporters.data,
        dataReportersUpdates: fetchReportersUpdates.data,
        dataSections: fetchSections.data,
        dataSectionsUpdates: fetchSectionsUpdates.data,
      });
    }
  }, [
    fetchReporters,
    fetchReportersUpdates,
    fetchSections,
    fetchSectionsUpdates,
  ]);

  return (
    <ContextData.Provider value={[state, setState]}>
      {children}
    </ContextData.Provider>
  );
};

export default AppContext;
