
import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { ChangeEvent, FC, useState } from "react"
import classes from './search.module.scss'
const SearchInfo: FC = () => {

 const [search, setSearch] = useState<string>("")

 const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
 }
 return (
  <div className={classes.search}>
   <div>
    <InputGroup size="md">
     <InputLeftElement
      pointerEvents="none"
      children={<SearchIcon color="gray.50" />}

     />
     <Input
      //variant="outline"
      size="md"
      type={"search"}
      value={search}
      placeholder={`Search`}
      onChange={e => onSearch(e)} />
    </InputGroup>
   </div>

  </div>
 )
}
export default SearchInfo