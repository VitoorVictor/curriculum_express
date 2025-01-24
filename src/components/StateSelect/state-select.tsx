import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StateSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione o estado" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Estados</SelectLabel>
          <SelectItem value="RS">RS</SelectItem>
          <SelectItem value="SC">SC</SelectItem>
          <SelectItem value="PR">PR</SelectItem>
          <SelectItem value="SP">SP</SelectItem>
          <SelectItem value="RJ">RJ</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
