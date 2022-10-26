import {
  Avatar,
  Badge,
  Group,
  ScrollArea,
  Select,
  Table,
  Text
} from '@mantine/core'

interface UsersTableProps {
  data: {
    avatar: string
    name: string
    job: string
    email: string
    role: string
  }[]
}

const rolesData = ['Manager', 'Collaborator', 'Contractor']

const data1 = [
  {
    avatar: 'https://cdn.discordapp.com/attachments/1017794189452390440/1033661501321531402/image0.jpg;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'https://cdn.discordapp.com/attachments/1017794189452390440/1033661622935371836/image0.jpg;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'string;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'string;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'string;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'string;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
  {
    avatar: 'string;',
    name: 'string;',
    job: 'string;',
    email: 'string;',
    role: 'string',
  },
]

// {  }: UsersTableProps
export function UsersRolesTable() {
  const rows = data1.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text size="xs" color="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Select data={rolesData} defaultValue={item.role} variant="unstyled" />
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )}
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Last active</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  )
}
