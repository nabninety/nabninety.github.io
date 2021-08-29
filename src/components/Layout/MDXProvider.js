/* eslint-disable */

// Thank you to Ryosuke- https://whoisryosuke.com/ for the component
// https://github.com/whoisryosuke/next-mdx-chakra-docs/blob/master/components/MDXProvider.jsx

import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertDialog,
  Avatar,
  AspectRatioBox,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Callout,
  Code,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Collapse,
  ControlBox,
  CircularProgress,
  Divider,
  Drawer,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputGroup,
  Kbd,
  Link,
  List,
  ListItem,
  Stack,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Modal,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Progress,
  PseudoBox,
  Radio,
  RadioGroup,
  RadioButtonGroup,
  Select,
  Skeleton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagIcon,
  TagLabel,
  TagCloseButton,
  Text,
  Textarea,
  Tooltip,
  VisuallyHidden,
} from '@chakra-ui/react';

const mdComponents = {
  h1: props => <Heading as="h1" size="2xl" mt={4} {...props} />,
  h2: props => <Heading as="h2" size="xl" mt={4} {...props} />,
  h3: props => <Heading as="h3" size="lg" mt={4} {...props} />,
  h4: props => <Heading as="h4" size="md" mt={4} {...props} />,
  h5: props => <Heading as="h5" size="sm" mt={4} {...props} />,
  h6: props => <Heading as="h6" size="xs" mt={4} {...props} />,
  p: props => <Text as="p" marginY={5} fontSize="xl" {...props} />,
  a: props => <Link as="a" color="pink.500" {...props} />,
  ul: props => (
    <List
      px={3}
      styleType="square"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  ol: props => (
    <List
      as="ol"
      styleType="decimal"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  li: props => <ListItem {...props} />,
  hr: props => <Divider my={8} {...props} />,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertDialog,
  Avatar,
  AspectRatioBox,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Callout,
  Code,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Collapse,
  ControlBox,
  CircularProgress,
  Divider,
  Drawer,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputGroup,
  Kbd,
  Link,
  List,
  Stack,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Modal,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Progress,
  PseudoBox,
  Radio,
  RadioGroup,
  RadioButtonGroup,
  Select,
  Skeleton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagIcon,
  TagLabel,
  TagCloseButton,
  Text,
  Textarea,
  Tooltip,
  VisuallyHidden,
};

const MDX = props => {
  return (
    <MDXProvider components={mdComponents}>
      <MDXRenderer localImages={props.localImages}>
        {props.children}
      </MDXRenderer>
    </MDXProvider>
  );
};

export default MDX