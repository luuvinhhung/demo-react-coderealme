import React from 'react'
import 'antd/dist/antd.css'
import { Button, Table, Row, Input, Icon } from 'antd'
import Highlighter from 'react-highlight-words';

const Search = Input.Search;
export default class StudentMark extends React.Component {
  state = {
    data: [
      {
        key: 'stu-1',
        name: 'Hung',
        class: 'a1',
        birthday: '09-09-1996',
        subjects: {
          toan: 10,
          ly: 10,
          hoa: 1
        }
      },
      {
        key: 'stu-2',
        name: 'Chin',
        class: 'a2',
        birthday: '01-12-1992',
        subjects: {
          toan: 9,
          ly: 9,
          hoa: 9
        }
      },
      {
        key: 'stu-3',
        name: 'Thuan',
        class: 'a2',
        birthday: '01-12-1995',
        subjects: {
          toan: 3,
          ly: 3,
          hoa: 3
        }
      }
    ],
    searchText: '',
  }
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => { this.searchInput = node; }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }
  // filter = (keyWord) => {
  //   if (keyWord) {
  //     const dataShadow = [...this.state.data]
  //     this.setState({
  //       data: dataShadow.filter(student => {
  //         return student.name.toLowerCase().includes(keyWord.toLowerCase())
  //       })
  //     })
  //   }
  // }
  render() {
    let { data } = this.state
    const columns = []
    const subjects = [
      'toan', 'ly', 'hoa'
    ]
    const numberOfColumn = [
      'name',
      'class',
      'birthday',
      ...subjects
    ]
    for (let [index, value] of numberOfColumn.entries()) {
      // console.log(value)
      const obj = {
        key: `col-${index}`,
        title: value.toUpperCase(),
        width: 100,
        ...this.getColumnSearchProps(value),
        render: (text, record) => {
          if (index > 2) {
            const a = Object.entries(record)
            // console.log(a[4][1])
            return <span>{a[4][1][value]}</span>
          }
          return <span>{record[value]}</span>
        }
      }
      columns.push(obj)
    }
    const pagination={position: 'bottom', pageSize: 5}
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          bordered
          rowKey='key'
        />
      </div>
    )
  }
}
