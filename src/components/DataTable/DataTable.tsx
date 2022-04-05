import React from "react";
import { View } from "react-native";
import Text from "@app/components/Text";

import type { PropsType } from "./types";
import DataTableStyles from "./styles";

const DataTable: React.FC<PropsType> = (props) => {
  const { tableData } = props;

  return (
    <View style={DataTableStyles.table}>
      {tableData.map((row, tableIndex) => {
        const header = tableIndex === 0;

        return (
          <View key={`row-${tableIndex}`} style={DataTableStyles.row}>
            {row.map((column, rowIndex) => {
              const dateColumn = rowIndex === 0;

              return (
                <View
                  key={`column-${rowIndex}`}
                  style={[
                    DataTableStyles.column,
                    dateColumn
                      ? DataTableStyles.flexTwo
                      : DataTableStyles.flexOne,
                  ]}
                >
                  <Text
                    text={String(column)}
                    textStyle={
                      header ? DataTableStyles.headers : DataTableStyles.field
                    }
                  />
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default DataTable;
