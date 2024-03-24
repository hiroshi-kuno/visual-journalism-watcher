import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();
import axios from "axios";

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
      .get("https://storage.googleapis.com/vrw-dataset/reporters.json")
      .then((response) => {
        setFetchReporters({
          done: true,
          isGet: true,
          data: response.data,
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
      .get("https://storage.googleapis.com/vrw-dataset/sections.json")
      .then((response) => {
        setFetchSections({
          done: true,
          isGet: true,
          data: response.data,
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
