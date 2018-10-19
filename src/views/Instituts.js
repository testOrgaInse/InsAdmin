import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextInput
} from "react-admin";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import ListActions from "../components/ListActions";

const InstitutsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput source="id" label="resources.institutes.fields.id" />
    <TextInput
      source="like_institute.name"
      label="resources.institutes.fields.name"
    />
  </Filter>
);

export const InstitutsList = ({ ...props }) => (
  <List {...props} filters={<InstitutsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit source="id" label="resources.institutes.fields.id" />
      <LinkEdit source="name" label="resources.institutes.fields.name" />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const InstitutsTitle = ({ record }) => {
  return record.name;
};

export const InstitutsEdit = ({ ...props }) => (
  <Edit title={<InstitutsTitle />} {...props} actions={<ListActions />}>
    <SimpleForm>
      <TextInput source="name" label="resources.institutes.fields.name" />
      <TextInput source="address" label="resources.institutes.fields.address" />
      <TextInput source="phone" label="resources.institutes.fields.phone" />
      <TextInput source="mail" label="resources.institutes.fields.mail" />
      <TextInput source="manager" label="resources.institutes.fields.manager" />
      <TextInput
        source="mail_manager"
        label="resources.institutes.fields.mail_manager"
      />
      <TextInput source="dr" label="resources.institutes.fields.dr" />
    </SimpleForm>
  </Edit>
);

export const InstitutsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListActions />}>
    <SimpleForm redirect="list">
      <TextInput source="name" label="resources.institutes.fields.name" />
      <TextInput source="address" label="resources.institutes.fields.address" />
      <TextInput source="phone" label="resources.institutes.fields.phone" />
      <TextInput source="mail" label="resources.institutes.fields.mail" />
      <TextInput source="manager" label="resources.institutes.fields.manager" />
      <TextInput
        source="mail_manager"
        label="resources.institutes.fields.mail_manager"
      />
      <TextInput source="dr" label="resources.institutes.fields.dr" />
    </SimpleForm>
  </Create>
);