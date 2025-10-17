import { useEffect, useState } from "react";
import { getAllDomainsApi } from "./services/domain.services";
import { getAllProficienyLevelsApi } from "./services/proficiency-level.service";
import { getAllDsasApi } from "./services/dsa.service";
import { getAllTopicsApi } from "./services/topic.service";
import type { TDomain } from "./types/TDomain";
import type { TProficienyLevel } from "./types/TProficienyLevel";
import type { TDsa } from "./types/TDsa";
import type { TTopic } from "./types/TTopic";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
function App() {
  // const [topics, setTopics] = useState<TTopic[]>([]);
  const [domains, setDomains] = useState<TDomain[]>([]);
  const [proficiencyLevels, setProficiencyLevels] = useState<
    TProficienyLevel[]
  >([]);
  const [dsas, setDsas] = useState<TDsa[]>([]);
  const [topics, setTopics] = useState<TTopic[]>([]);

  useEffect(() => {
    getAllDomainsApi()
      .then((data) => setDomains(data))
      .catch((err) => console.error(err));

    getAllProficienyLevelsApi()
      .then((data) => setProficiencyLevels(data))
      .catch((err) => console.error(err));

    getAllDsasApi()
      .then((data) => setDsas(data))
      .catch((err) => console.error(err));

    getAllTopicsApi()
      .then((data) => setTopics(data))
      .catch((err) => console.error(err));
  }, []);

  const domainMap: { [key: string]: string } = {};
  const levelMap: { [key: string]: string } = {};
  const categoryMap: { [key: string]: string } = {};
  domains.forEach((t) => {
    domainMap[t._id] = t.name;
  });
  proficiencyLevels.forEach((l) => {
    levelMap[l._id] = l.name;
  });
  dsas.forEach((d) => {
    categoryMap[d._id] = d.name;
  });

  // lọc categories theo domainId
  const filteredCategories = (domainId: number) =>
    dsas.filter((cat) => cat.domainId === domainId);

  // lọc topics theo categoryId
  const filtereTopics = (dsaId: number) =>
    topics.filter((t) => t.dsaId === dsaId);

  return (
    <div className="">
      <div className="text-3xl pb-8 text-center font-bold">
        Programming Knowledge Tracker
      </div>
      <Table>
        <TableCaption>
          <Button variant="outline">Add </Button>
        </TableCaption>
        <TableCaption>Danh sách các loại cấu trúc dữ liệu</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Topic name</TableHead>
            <TableHead>Tier</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tier}</TableCell>
              <TableCell>{categoryMap[item.dsaId]}</TableCell>
              <TableCell>{item.levelId}</TableCell>
              <TableCell>{levelMap[item.levelId]}</TableCell>
              <TableCell>
                <Button variant="outline">Update</Button>
                <span className="p-1"></span>
                <Button variant="destructive" className="text-white">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table>
        <TableCaption>
          <Button variant="outline">Add</Button>
        </TableCaption>
        <TableCaption>
          Danh sách các cấu trúc dữ liệu và giải thuật
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Category name</TableHead>
            <TableHead>Domain</TableHead>
            <TableHead>Total topics</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dsas.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{domainMap[item.domainId]}</TableCell>
              <TableCell>{filtereTopics(item.domainId).length}</TableCell>
              <TableCell>
                {filtereTopics(item.domainId).reduce(
                  (sum, t) => sum + t.levelId,
                  0
                )}
                /{filtereTopics(item.domainId).length * 5}
              </TableCell>
              <TableCell>
                <Button variant="outline">Detail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table>
        <TableCaption>
          <Button variant="outline">Add</Button>
        </TableCaption>
        <TableCaption>Danh sách các chủ đề</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Domain name</TableHead>
            <TableHead>Total categories</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {domains.map((d) => (
            <TableRow key={d._id}>
              <TableCell>{d._id}</TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{filteredCategories(d._id).length}</TableCell>
              <TableCell>
                <Button variant="outline">Detail</Button>
              </TableCell>
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
