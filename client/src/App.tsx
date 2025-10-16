import { useEffect, useState } from "react";
import { getAllTopicsApi } from "./services/topic.services";
import { getAllProficienyLevelsApi } from "./services/proficiency-level.service";
import { getAllDsasApi } from "./services/dsa.service";
import type { TTopic } from "./types/TTopic";
import type { TProficienyLevel } from "./types/TProficienyLevel";
import type { TDsa } from "./types/TDsa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function App() {
  const [topics, setTopics] = useState<TTopic[]>([]);
  const [proficiencyLevels, setProficiencyLevels] = useState<
    TProficienyLevel[]
  >([]);
  const [dsas, setDsas] = useState<TDsa[]>([]);

  useEffect(() => {
    getAllTopicsApi()
      .then((data) => setTopics(data))
      .catch((err) => console.error(err));

    getAllProficienyLevelsApi()
      .then((data) => setProficiencyLevels(data))
      .catch((err) => console.error(err));

    getAllDsasApi()
      .then((data) => setDsas(data))
      .catch((err) => console.error(err));
  }, []);

  // const getTypesOfDsa = () => {
  //   const types = dsas.map((i) => {});
  // };

  return (
    <div className="">
      <Table>
        <TableCaption>
          Danh sách các cấu trúc dữ liệu và giải thuật
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Tier</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dsas.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.topicId}</TableCell>
              <TableCell>{item.tier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table>
        <TableCaption>Danh sách các chủ đề</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Topic name</TableHead>
            <TableHead>Point</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow key={topic._id}>
              <TableCell>{topic._id}</TableCell>
              <TableCell>{topic.name}</TableCell>
              <TableCell>0/0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table>
        <TableCaption>Danh sách các cấp độ</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Level</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Signs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proficiencyLevels.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                {item.signs.map((sign, index) => (
                  <li key={index}> {sign}</li>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
